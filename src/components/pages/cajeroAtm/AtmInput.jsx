import React from 'react'

export const AtmInput = ({
    atmPassword, handleChange, handleBlur, touched, errors, showTypeDocument,
}) => {
  return (
  <>
      <input 
          placeholder="Digita tu clave de cajero automático"
          type="text" 
          name="atmPassword"
          onBlur={handleBlur}
          onChange={handleChange}
          inputMode='numeric' 
          value={atmPassword.slice(0, 4).replace(/[^0-9]*$/, '')}
          required
          className="border-2"
      />
      {/* 
          {
            touched.atmPassword && errors.atmPassword && (
              <p>{errors.atmPassword}</p>
              )
            } 
          */}
    </>
  )
}
