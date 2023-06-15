import { type UserChatEventData } from './UserChatEventData';

export interface AdministrationEventData {
  userName: string; // Target userName
  roles?: string[]; // 'mod', 'sub', 'DiscordRoleName'
  removedMessage?: string; // Message that was removed
  targetId?: string; // Depends on subCategory| Timeout=userId, Ban=userId, MessageRemoval=messageId
  duration?: number; // If a duration is associated, we store it here
}

export interface MonetizationEventData {
  sourceUserName: string;
  targetUserName?: string;
  duration?: number;
  estimatedValue?: number;
  message?: string;
}

export type EventDataTypes = null | AdministrationEventData | MonetizationEventData | UserChatEventData;
