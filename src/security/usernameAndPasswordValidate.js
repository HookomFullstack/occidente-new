export const usernameAndPasswordValidate = ({
        values, 
        virtualKeyword = false,
    }) => {

    let errors = {}
    
    if (values.username == false) {
        errors.username = 'El campo usuario es requerido'
    }

    if (values.password == false && virtualKeyword == false) {
        errors.password = 'El campo contraseña es requerido'
    }

    return errors

}