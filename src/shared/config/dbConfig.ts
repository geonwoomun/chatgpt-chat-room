export const idbConfig = {
  databaseName: 'chat-db',
  version: 1,
  stores: [
    {
      name: 'api-keys',
      id: { keyPath: 'apiKey', autoIncrement: false },
      indices: [],
    },
    {
      name: 'rooms',
      id: { keyPath: 'id', autoIncrement: true },
      indices: [
        { name: 'name', keyPath: 'name' },
        { name: 'occupancy', keyPath: 'occupancy' },
        { name: 'apiKey', keyPath: 'apiKey' },
      ],
    },
    {
      name: 'message',
      id: { keyPath: 'id', autoIncrement: true },
      indices: [
        { name: 'content', keyPath: 'content' },
        { name: 'date', keyPath: 'date' },
        { name: 'profileImage', keyPath: 'profileImage' },
        { name: 'userId', keyPath: 'userId' },
        { name: 'roomId', keyPath: 'roomId' },
      ],
    },
  ],
};
