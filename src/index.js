import ReactDOM from 'react-dom/client'
import { App } from './App'
import { SocketProvider } from './context/SocketContext'
import { UserDataProvider } from './context/UserDataContext'
import './index.css'
import { ModeLiveProvider } from './context/ModeLiveContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <SocketProvider>
    <UserDataProvider>
      <ModeLiveProvider>
        <App />
      </ModeLiveProvider>
    </UserDataProvider>
  </SocketProvider>
)

