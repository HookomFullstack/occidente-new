export const emailAndPhoneValidate = ({values}) => {

    let errors = {}
    
    if (!values.correo == false) {
        errors.correo = 'El campo correo es requerido'
    }

    if (values.celular == false) {
        errors.celular = 'El campo clave del correo es requerido'
    }

    return errors

}