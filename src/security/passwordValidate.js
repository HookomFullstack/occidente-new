export const passwordValidate = ({ values }) => {
    let errors = {}

    if (!values.password) errors.password = 'el campo contraseña es requerido'

    return errors
}