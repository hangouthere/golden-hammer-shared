export interface EmoteMeta {
  emoteId: string;
  uri: string;
}

export interface MessageBuffer {
  // TODO: Consider UTF-8/etc extraction(s)?
  type: 'word' | 'emote' | 'uri';
  content: string;
  meta?: EmoteMeta;
}

export interface UserChatEventData {
  userName: string;
  userId?: string; // Not on join/part
  messageId?: string; // Not on join/part
  roles?: string[]; // 'mod', 'sub', 'DiscordRoleName'
  messageBuffers?: MessageBuffer[];
  presence?: string | boolean; // indicates presence on a platform (ie, join|part, online|offline (as bool))
}
