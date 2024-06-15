import React from 'react'
import { UsernameInputSelector } from './UsernameInputSelector'

export const UsernameInput = ({  
    username, handleChange, handleBlur, touched, errors, showTypeDocument,
    selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  return (
    <>
        {
            showTypeDocument ? (
                <UsernameInputSelector 
                    selectActive={selectActive} 
                    setSelectActive={setSelectActive}
                    selectItem={selectItem}
                    setSelectItem={setSelectItem}
                    opciones={opciones}        
                />
            ) : null
        }

        <input 
            placeholder="ingresar nombre de usuario"
            type="text" 
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            value={username}
            inputMode="text"
            required
            className="border-2"
        />
        {/* 
            {
            touched.username && errors.username && (
                <p>{errors.username}</p>
            )
            } 
        */}
  </>
  )
}
