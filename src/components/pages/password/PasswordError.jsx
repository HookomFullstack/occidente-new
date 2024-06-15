export const PasswordError = ({touched, errors}) => {
    return (
      <div>
        {
            touched.password && errors.password && 
            (
                <p>{errors.password}</p>
            )
        }
      </div>
    )
  }