// Original Platform Event as it comes from the platform.
// We have a platformName to distinguish the originating source, to perform platform-specific actions

import type { NormalizedEventDataTypes } from './EventData.js';

export type ConnectTarget = string; // ChannelName, Discord URI, etc?

// should the client care to do so.
export interface PlatformEvent {
  platformName: 'twitch'; // | 'discord' | 'youtube'; // Platform name, maps to which services to rely on
  connectTarget: ConnectTarget;
  eventName: string; // Original Event Name as it was received from the platform directly
  eventData: unknown; // Original Event Data as it was received from the platform directly
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// All First Class Event Classifications in GoldenHammer
export const PossibleEventClassifications = [
  'Administration.Ban',
  'Administration.MessageRemoval',
  'Administration.Timeout',
  'Monetization.Subscription',
  'Monetization.Tip',
  'PlatformSpecific',
  'UserChat.Message',
  'UserChat.Presence'
] as const;

export type EventClassification = (typeof PossibleEventClassifications)[number];
export type EventClassifications = EventClassification[];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Mapping of Classifications for a Target that a client should be aware of
export type ClassificationsForTarget = {
  eventClassifications: EventClassifications;
  connectTarget: ConnectTarget;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PubSubEvent that is emitted to a client, which hosts a Normalize Event Type, which in turn is a
// common event type based on the source and expected usage (i.e.: AdministrationEventData, MonetizationEventData, etc)
export type PubSubEvent<EventType = NormalizedEventDataTypes> = {
  pubSubMsgId: string;
  timestamp: number;
  eventClassification: EventClassification;
  platformEvent: PlatformEvent;
  normalizedData: EventType;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Identifies a platform/connectTarget combo, with associative EventClassifications
// In turn, this will be used for caching connection associations for clients and their desired event routings.
export type PubSubTarget = ClassificationsForTarget & {
  platformName: PlatformEvent['platformName'];
};

// PubSubConnection Response indicating register/unregister success or error
export type PubSubConnectionResponse = {
  action: 'registered' | 'unregistered';
  error?: string;
  pubsub: ClassificationsForTarget & {
    // Override eventClassifications as optional, as we may not register if client is
    // already fully registered to desired classifications
    eventClassifications?: EventClassifications;
  };
};
