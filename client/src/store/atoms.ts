import { atom } from "recoil";
import { MessageProps } from "../types/MessageProps";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const generatedRoomCode = atom({
    key: 'roomCode',
    default: '',
})

export  const usersCount = atom({
    key: 'usersCount',
    default: 0,
})

export const joinedStatus = atom({
    key: 'joinedStatus',
    default: false,
})

export const roomCreationStatus = atom({
    key: 'roomCreationStatus',
    default: false,
})

export const usernameState = atom({
    key: 'username',
    default: '',
    effects_UNSTABLE: [persistAtom],
})

export const roomIdState = atom({
    key: 'roomId',
    default: '',
})

export const currentMessageDetails = atom<MessageProps[]>({
    key: 'currentMessageDetails',
    default: [],
})