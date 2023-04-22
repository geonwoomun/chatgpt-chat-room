export type ApiKeyModel = {
  apiKey: string;
};

export type BaseRoomModel = {
  name: string;
  occupancy: number;
};

export type RoomModel = {
  roomId: number;
  apiKey: ApiKeyModel['apiKey'];
} & BaseRoomModel;

export type CreateRoomModel = {
  apiKey: ApiKeyModel['apiKey'];
} & BaseRoomModel;

export type MessageModel = {
  content: string;
  date: string;
  userId: string;
  roomId: RoomModel['roomId'];
};
