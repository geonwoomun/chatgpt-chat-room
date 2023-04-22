import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo, useState } from 'react';
import { RoomModel } from '../types/schema';

export const RoomsContext = createContext<[RoomModel[], Dispatch<SetStateAction<RoomModel[]>>] | undefined>(undefined);

export const useRoomsState = () => {
  const value = useContext(RoomsContext);

  if (value === undefined) {
    throw new Error('useRoomsState should be used within RoomsContext');
  }
  return value;
};

export function RoomsProvider({ children }: PropsWithChildren<{}>) {
  const roomsState = useState<RoomModel[]>([]);

  return <RoomsContext.Provider value={roomsState}>{children}</RoomsContext.Provider>;
}
