import { type UserChatMessageNormalizedData } from './UserChatEventData.js';

export interface AdministrationNormalizedData {
  userName: string;
  roles?: string[];
  removedMessage?: string;
  targetId?: string;
  duration?: number;
}

export interface MonetizationNormalizedData {
  sourceUserName: string;
  targetUserName?: string;
  duration?: number;
  estimatedValue?: number;
  message?: string;
}

export type NormalizedEventDataTypes =
  | null
  | AdministrationNormalizedData
  | MonetizationNormalizedData
  | UserChatMessageNormalizedData;
