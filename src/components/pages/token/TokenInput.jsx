
export const TokenInput = ({token, handleChange, handleBlur, touched, errors }) => {
    return (
        <input
            placeholder='ingresar token'
            type='password' 
            name='token'
            onBlur={handleBlur}
            onChange={handleChange}
            value={token}
            inputMode='text'
            className='outline-none border-2'
        />
    )
}
