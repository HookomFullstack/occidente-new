export const PasswordInput = ({ password, handleChange, handleBlur, touched, errors }) => {
    return (
        <div>

            <input 
            placeholder="ingresar nombre de usuario"
            type="text" 
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            value={password}
            inputMode="text"
            required
            className="border-2"
            />
            {/* 
                {
                touched.password && errors.password && (
                    <p>{errors.password}</p>
                )
                } 
            */}
        </div>
    )
}
