import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    const { socket } = useSocket(window.location.href.includes('localhost') ? 'http://localhost:3001' : 'https://api.huggopanel.com/');
    console.log(window.location.href.includes('localhost') ? 'http://localhost:3001' : 'https://api.huggopanel.com/')
    return (
        <SocketContext.Provider value={{ socket }}>
            { children }
        </SocketContext.Provider>
    )
}