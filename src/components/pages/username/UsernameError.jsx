export const UsernameError = ({touched, errors}) => {
  return (
    <div>
        {
          touched.username && errors.username && 
          (
            <p>{errors.username}</p>
          )
        }
    </div>
  )
}