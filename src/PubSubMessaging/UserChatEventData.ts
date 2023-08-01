import type { ChatUserstate } from 'tmi.js';

export type Range = {
  start: number;
  end: number;
};

export type UserRoles = (ChatUserstate['user-type'] | 'subscriber')[];

export type URIRange = Range & {
  uri: string;
};

export type EmoteRange = Range & {
  emoteId: string;
};

export type MessageIterateMetaData = {
  message: string;
  uriIndices: URIRange[];
  emoteIndices: EmoteRange[];
};

export type WordChunkIterateMetaData = {
  uriIndices: URIRange[];
  emoteIndices: EmoteRange[];
  msgIdx: number;
  charOffset: number;
  wordChunk: string;
};

export interface EmoteMeta {
  emoteId: string;
  uri: string;
}

export type MessageChunk = {
  type: 'emote' | 'uri' | 'word';
  content: string;
  meta?: EmoteMeta;
};

export type UserChatMessageNormalizedData = {
  userName: string;
  userId?: ChatUserstate['user-id']; // Not on join/part
  messageId?: ChatUserstate['id']; // Not on join/part
  roles?: UserRoles;
  messageBuffers?: MessageChunk[];
  presence?: string | boolean; // indicates presence on a platform (ie, join|part, online|offline (as bool))
};
