
export const GmailInputVerification = ({handleBlur, handleChange, correo}) => {
  return (
    <div>
      <label htmlFor="email">Introduce tu contraseña</label>
      <input  
        name="correo"
        onBlur={handleBlur}
        onChange={handleChange}
        value={correo}
        inputMode="text"
        className="text-[#202124] text-[16px] h-[28px] py-[12px] border-2"
        type="email" 
        required
      />
    </div>
  )
}
