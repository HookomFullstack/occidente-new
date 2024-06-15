export const atmValidate = ({ values }) => {

    let errors = {}

    if (values.atmPassword == false) {
        errors.atmPassword = 'El campo atm es requerido' 
    }

    return errors

}