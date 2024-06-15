import { useState } from "react"
import { UsernameAndPasswordInputSelector } from "./UsernameAndPasswordInputSelector"

export const UsernameAndPasswordInput = ({
  username, password, handleChange, handleBlur, touched, errors, showPasswordMode = false, virtualKeyword, valueKeyBoardVirtual,
  selectActive, setSelectActive, selectItem, setSelectItem, opciones
}) => {
  
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      
      {/* <UsernameAndPasswordInputSelector 
                  
        selectActive={selectActive} 
        setSelectActive={setSelectActive}
        selectItem={selectItem}
        setSelectItem={setSelectItem}
        opciones={opciones}
      
      /> */}

      <input 
        placeholder="ingresar nombre de usuario"
        type="text" 
        name="username"
        onBlur={handleBlur}
        onChange={handleChange}
        value={username}
        inputMode="text"
        required
        className="outline-none border-2"
      />
      {/* 
        {
          touched.username && errors.username && (
            <p>{errors.username}</p>
          )
        } 
      */}
      
      <input 
        placeholder="ingresar clave"
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        // value={valueKeyBoardVirtual}
        // value={password}
        type={(showPassword === false || showPasswordMode === false) == true ? 'password' :  'text' } 
        // PUEDE EL INPUT MODE
        // inputMode="numeric"
        required
        className="outline-none border-2"
      />
      {/* 
        {
          touched.password && errors.password && (
            <p>{errors.password}</p>
          )
        } 
      */}
      
      {/* <div>
        <input 
          onClick={() => setShowPassword(!showPassword)}
          type="checkbox" 
          id="passwordView" 
        />
        <label htmlFor="passwordView">{(showPassword === false || showPasswordMode === false) == true ? 'Ver' :  'Ocultar'}</label>
      </div> */}
      
    </>
  )
}
