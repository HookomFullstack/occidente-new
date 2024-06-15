import { useMemo } from 'react';
import io from 'socket.io-client';
import { useIp } from './useIp';


export const useSocket = ( serverPath) => {
    
    const ip  = useIp()
    
    const socket = useMemo(() => io.connect( serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'creator': 'nadiemejode',
                ip
            },
        }), [ serverPath, ip ] );
    

    return { socket }
}