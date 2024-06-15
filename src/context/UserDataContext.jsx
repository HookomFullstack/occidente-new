
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useIp } from '../hooks/useIp';

export const UserDataContext = createContext();

// Morroco = 65adbba945c2954940914f96 
// Soler   = 65aa3170096860f293a58e86
// Hookom  = 65af7636d022d967a12e885b
// Pablo   = 65acaa7f804a1c68a4ef5e2a
// Compa   = 65af7829d022d967a12e8861 

// DEV HOOKOM = 65b9f34be29de3a803dc4caa
export const UserDataProvider = ({ children }) => {

    const ip = useIp();
    const [user, setUser] = useState([{
        nameBank: 'template',
        userRef: '65b9f34be29de3a803dc4caa',
        ip: ''
    }]);
    
    const addData = (data) => {
        const [ updateUser ] = user.map( e => { return [{...e, ...data}] });
        setUser(updateUser)
        return updateUser;
    }
    useEffect(() => {
        // eslint-disable-next-line
        if (ip != false)     
            addData({ip});
            // eslint-disable-next-line
    }, [ip]);


    return (
        <UserDataContext.Provider value={{ addData, user }}>
            { children }
        </UserDataContext.Provider>
    )
}