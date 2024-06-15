export const usernameValidate = ({ values }) => {
    let errors = {}

    if (!values.username) errors.username = 'el campo usuario es requerido'

    return errors
}