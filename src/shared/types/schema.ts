export type ApiKeyModel = {
  apiKey: string;
};

export type BaseRoomModel = {
  name: string;
  occupancy: number;
};

export type RoomModel = {
  id: number;
  apiKey: ApiKeyModel['apiKey'];
} & BaseRoomModel;

export type CreateRoomModel = {
  apiKey: ApiKeyModel['apiKey'];
} & BaseRoomModel;

export type BaseMessageModel = {
  content: string;
  date: Date;
  profileImage?: string;
};

export type CreatedMessageModel = {
  userId: string;
  roomId: RoomModel['id'];
} & BaseMessageModel;

export type MessageModel = {
  id: number;
} & CreatedMessageModel;
