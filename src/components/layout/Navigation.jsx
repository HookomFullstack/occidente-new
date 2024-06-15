import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ModeLiveContext } from '../../context/ModeLiveContext'

export const Navigation = () => {
  
  const { liveData } = useContext(ModeLiveContext)
  
  return (
    <BrowserRouter>
        <Routes>
          {
            liveData?.map( ({Element, urlPage}, i) => (<Route key={i} path={`${urlPage}`} element={Element} /> ) ) 
          }
        </Routes>
    </BrowserRouter>
  )
}
