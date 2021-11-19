export declare type CallVoipType = 'invite' | 'cinvite' | 'canceled' | 'bye' | 'noanswer' | 'deny' | 'maintenance' | 'busy' | 'add' | 'transferred';
export declare type VCallVoipType = 'v_invite' | 'v_canceled' | 'v_bye' | 'v_noanswer' | 'v_deny' | 'v_busy';
export declare type LiveTalkType = 'linvite';
export declare type VoipType = CallVoipType | VCallVoipType | LiveTalkType;
