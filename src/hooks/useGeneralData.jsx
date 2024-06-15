import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { SocketContext, UserDataContext } from "../context"
import { ModeLiveContext } from "../context/ModeLiveContext"

export const useGeneralData = ({spiner = null, modeLive = null, endUrl = null, timeLoader = 0}) => {

    const navigate    = useNavigate()
    const { addData } = useContext(UserDataContext)
    const { socket }  = useContext(SocketContext)  
    const { liveError, setLiveError, liveData } = useContext(ModeLiveContext)
    
    const liveDataFilter = liveData.map(({textPage, urlPage}, i) => ({urlPage, textPage, i, pageNow: window.location.pathname === urlPage}))

    const [showSpiner, setShowSpiner] = useState(false)
    const [seconds, setSeconds] = useState(timeLoader / 1000)
    // Modo normal.
    // Trae automaticamente del ModeLiveContext los elementos y segun el orden va al siguiente
    const urlToNavigate = liveDataFilter.map(({i}) => liveData[i].urlPage === window.location.pathname && liveData[i + 1].urlPage).filter(Boolean)[0]
    return {
        navigate, endUrl, urlToNavigate, 
        addData, socket,
        timeLoader, seconds, setSeconds,
        spiner, showSpiner, setShowSpiner, 
        modeLive, liveDataFilter, liveError, setLiveError, 
    }
}
