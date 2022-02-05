const account = require("./account.json");
const { email, pw, deviceName, deviceUUID } = account;
const { Webhook } = require('discord-webhook-node');
const {Client, Collection, MessageEmbed} = require('discord.js');

var fs = require('fs');
const { CheckinData, ChannelInfo, ChannelClientMetaType } = require("node-kakao");
const node_kakao = require("node-kakao");
const $AuthApiClient = node_kakao.AuthApiClient;
const $ChatBuilder = node_kakao.ChatBuilder;
const $KnownChatType = node_kakao.KnownChatType;
const $KnownFeedType = node_kakao.KnownFeedType;
const $KnownPostItemType = node_kakao.KnownPostItemType;
const $MentionContent = node_kakao.MentionContent;
const $ReplyContent = node_kakao.ReplyContent;
const $ReplyAttachment = node_kakao.ReplyAttachment;
const $TalkClient = node_kakao.TalkClient;
const client = new $TalkClient();
const $AttachmentApi = node_kakao.AttachmentApi;
const $KnownPostFooterStyle = node_kakao.KnownPostFooterStyle;
const $ContactAttachment = node_kakao.ContactAttachment;
const $AttachmentContent = node_kakao.AttachmentContent;
const Long = node_kakao.Long;
const readline = require("readline");

const client1 = new Client({intents:32767})

const Lw = '\u200b'.repeat(500);

//세팅
discord_channel = '911296875750096937'
kakao_channel = '18337843489966057'
const hook = new Webhook("웹훅");
//

client1.on('messageCreate',async message=>{
    if(message.channel.id == discord_channel) {
        if(message.author.discriminator == "0000") {
            return
        } else {
            ch = client.channelList.get(kakao_channel);
            ch.sendChat(`${message.author.username}#${message.author.discriminator}: ${message.content}`)
        }
    }
})

client.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    
    let roomId = channel.channelId;

    if(roomId == kakao_channel) {
        const IMAGE_URL = sender.originalProfileURL;
        hook.setUsername(sender.nickname);
        hook.setAvatar(IMAGE_URL);
        hook.send(data.text);
    }
});

client.on('disconnected', (reason) => {
    console.log('\n연결이 끊겼습니다');
});

async function main() {
	const api = await $AuthApiClient.create(deviceName, deviceUUID);
    const form = {
        email: email,
		password: pw,
		forced: true
    }
	loginRes = await api.login(form);
	if (!loginRes.success) {
        if (loginRes.status == -100) {
            loginRes = null;
            console.log("\n\n인증코드를 요청하는 중입니다..");
            const passcodeRes = await api.requestPasscode(form);
            if (!passcodeRes.success) {
                console.log("\n[!] 인증코드를 요청하지 못했습니다||에러코드: " + passcodeRes.status);
                process.exit();
            }
            let rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            let passcode = await new Promise(resolve => rl.question("[!] 인증코드: ", resolve));
            rl.close();
            const registerRes = await api.registerDevice(form, passcode, true);
            if (!registerRes.success) {
                console.log("\n\n[!] 디바이스 등록에 실패했습니다: " + registerRes.status);
                process.exit();
            }
            console.log("\n\n[!] 디바이스 등록에 성공했습니다||UUID: '" + deviceUUID + "'");
            loginRes = await api.login(form);
            if (!loginRes.success) {
                console.log("\n\n[!] 로그인 실패||에러코드: " + loginRes.status);
                process.exit();
            }
            console.log("\n\n로그인 성공\n\n");
        } else {
            console.log("\n\n[!] 로그인 실패||에러코드: " + loginRes.status)
            process.exit();
        }
    }
	const res = await client.login(loginRes.result);
	if (!res.success) throw new Error(`[!] 로그인 실패||에러코드: ${res.status}`);
	console.log("\n로그인 성공");
    accountUserId = loginRes.result.userId;
}
async function start() {
	await main();
    client1.login('봇토큰')
}

start();
