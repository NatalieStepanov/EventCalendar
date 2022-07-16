import './../css/Field.css'

const Field = ({error, ...rest})=>(
    <>
      <input {...rest}/>
      {error && <p className='error-field'>{error}</p>}
    </>
)

export default Field