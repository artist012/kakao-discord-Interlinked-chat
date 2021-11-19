/// <reference types="node" />

interface WritableStream extends NodeJS.WritableStream {
  bytesWritten?: number
  closed?: boolean
  destroyed?: boolean

  cork?(): void
  uncork?(): void

  destroy?(): void
}

export class PromiseWritable<TWritable extends WritableStream> {
  readonly _isPromiseWritable: boolean = true

  _errored?: Error

  constructor(readonly stream: TWritable) {
    stream.on("error", this.errorHandler)
  }

  static [Symbol.hasInstance](instance: PromiseWritable<WritableStream>): boolean {
    return instance._isPromiseWritable
  }

  write(chunk: string | Buffer, encoding?: BufferEncoding): Promise<number> {
    const stream = this.stream

    let rejected = false

    return new Promise((resolve, reject) => {
      if (this._errored) {
        const err = this._errored
        this._errored = undefined
        return reject(err)
      }

      if (!stream.writable || stream.closed || stream.destroyed) {
        return reject(new Error("write after end"))
      }

      const writeErrorHandler = (err: Error) => {
        this._errored = undefined
        rejected = true
        reject(err)
      }

      stream.once("error", writeErrorHandler)

      const canWrite = typeof chunk === "string" ? stream.write(chunk, encoding) : stream.write(chunk)

      stream.removeListener("error", writeErrorHandler)

      if (canWrite) {
        if (!rejected) {
          resolve(chunk.length)
        }
      } else {
        const errorHandler = (err: Error) => {
          this._errored = undefined
          removeListeners()
          reject(err)
        }

        const drainHandler = () => {
          removeListeners()
          resolve(chunk.length)
        }

        const closeHandler = () => {
          removeListeners()
          resolve(chunk.length)
        }

        const finishHandler = () => {
          removeListeners()
          resolve(chunk.length)
        }

        const removeListeners = () => {
          stream.removeListener("close", closeHandler)
          stream.removeListener("drain", drainHandler)
          stream.removeListener("error", errorHandler)
          stream.removeListener("finish", finishHandler)
        }

        stream.on("close", closeHandler)
        stream.on("drain", drainHandler)
        stream.on("error", errorHandler)
        stream.on("finish", finishHandler)
      }
    })
  }

  writeAll(content: string | Buffer, chunkSize: number = 64 * 1024): Promise<number> {
    const stream = this.stream

    return new Promise((resolve, reject) => {
      if (this._errored) {
        const err = this._errored
        this._errored = undefined
        return reject(err)
      }

      if (!stream.writable || stream.closed || stream.destroyed) {
        return reject(new Error("writeAll after end"))
      }

      let part = 0

      const closeHandler = () => {
        removeListeners()
        resolve(stream.bytesWritten || 0)
      }

      const drainHandler = () => {
        if (typeof stream.cork === "function") {
          stream.cork()
        }

        while (stream.writable && !this._errored && part * chunkSize < content.length) {
          const chunk = content.slice(part * chunkSize, ++part * chunkSize)
          if (part * chunkSize >= content.length) {
            stream.write(chunk, err => {
              if (err) reject(err)
              else resolve(stream.bytesWritten)
            })
            break
          } else {
            const canWrite = stream.write(chunk)
            if (!canWrite) {
              break
            }
          }
        }

        if (typeof stream.uncork === "function") {
          stream.uncork()
        }
      }

      const errorHandler = (err: Error) => {
        this._errored = undefined
        removeListeners()
        reject(err)
      }

      const finishHandler = () => {
        removeListeners()
        resolve(stream.bytesWritten || 0)
      }

      const removeListeners = () => {
        stream.removeListener("close", closeHandler)
        stream.removeListener("drain", drainHandler)
        stream.removeListener("error", errorHandler)
        stream.removeListener("finish", finishHandler)
      }

      stream.on("drain", drainHandler)
      stream.on("close", closeHandler)
      stream.on("finish", finishHandler)
      stream.on("error", errorHandler)

      drainHandler()
    })
  }

  once(event: "close" | "error" | "finish"): Promise<void>
  once(event: "open"): Promise<number>
  once(event: "pipe" | "unpipe"): Promise<NodeJS.ReadableStream>

  once(event: string): Promise<void | number | NodeJS.ReadableStream> {
    const stream = this.stream

    return new Promise((resolve, reject) => {
      if (this._errored) {
        const err = this._errored
        this._errored = undefined
        return reject(err)
      }

      if (this._errored) {
        return reject(this._errored)
      } else if (stream.closed) {
        if (event === "close") {
          return resolve()
        } else {
          return reject(new Error(`once ${event} after close`))
        }
      } else if (stream.destroyed) {
        if (event === "close" || event === "finish") {
          return resolve()
        } else {
          return reject(new Error(`once ${event} after destroy`))
        }
      }

      const closeHandler = () => {
        removeListeners()
        resolve()
      }

      const eventHandler =
        event !== "close" && event !== "finish" && event !== "error"
          ? (argument: any) => {
              removeListeners()
              resolve(argument)
            }
          : undefined

      const errorHandler = (err: Error) => {
        this._errored = undefined
        removeListeners()
        reject(err)
      }

      const finishHandler =
        event !== "close"
          ? () => {
              removeListeners()
              resolve()
            }
          : undefined

      const removeListeners = () => {
        if (eventHandler) {
          stream.once(event, eventHandler)
        }
        stream.removeListener("close", closeHandler)
        stream.removeListener("error", errorHandler)
        if (finishHandler) {
          stream.removeListener("finish", finishHandler)
        }
      }

      if (eventHandler) {
        stream.on(event, eventHandler)
      }
      stream.on("close", closeHandler)
      stream.on("error", errorHandler)
      if (finishHandler) {
        stream.on("finish", finishHandler)
      }
    })
  }

  end(): Promise<void> {
    const stream = this.stream

    return new Promise((resolve, reject) => {
      if (this._errored) {
        const err = this._errored
        this._errored = undefined
        return reject(err)
      }

      if (!stream.writable || stream.closed || stream.destroyed) {
        return resolve()
      }

      const finishHandler = () => {
        removeListeners()
        resolve()
      }

      const errorHandler = (err: Error) => {
        this._errored = undefined
        removeListeners()
        reject(err)
      }

      const removeListeners = () => {
        stream.removeListener("error", errorHandler)
        stream.removeListener("finish", finishHandler)
      }

      stream.on("finish", finishHandler)
      stream.on("error", errorHandler)

      stream.end()
    })
  }

  destroy(): void {
    if (this.stream) {
      this.stream.removeListener("error", this.errorHandler)
      if (typeof this.stream.destroy === "function") {
        this.stream.destroy()
      }
    }
  }

  private errorHandler = (err: Error): void => {
    this._errored = err
  }
}

export default PromiseWritable
