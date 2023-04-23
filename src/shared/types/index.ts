import { IDB_KEY } from '../hooks/indexedDB/constants';
import { IndexedDBConfig } from '../hooks/indexedDB/interfaces';

declare global {
  interface Window {
    [IDB_KEY]: { init: number; config: IndexedDBConfig };
  }
}

export {};
