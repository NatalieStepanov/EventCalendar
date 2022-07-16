import './../css/AuthComponent.css'
import Field from './Field'
import {useForm, set} from 'react-cool-form'
import * as yup from 'yup'

const AuthComponent = () => {

    const yupSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    const validateWithYup = (schema) => async (values) =>{
        let errors = {}
        try{
            await schema.validate(values, {abortEarly: false})
        }catch (yupError){
            yupError.inner.forEach(({path, message})=> set(errors, path, message))
        }
    }

    const {form, use} = useForm({
        defaultValues:{email:'', password:''},
        validate: validateWithYup(yupSchema),
        onSubmit:(values, event, e)=>{
            console.log(values)
            console.log(e)
        }
    })

    const errors = use('errors', {errorWithTouched: true})

    return (
        <div className='main-auth'>
            <div className='container-auth'>
                <div className='top-auth'>
                    <p>Sign In</p>
                </div>
                <form ref = {form} noValidate>
                    <Field name='email'
                           placeholder='type your email'
                           error={errors.email} />
                    <Field name='password'
                           placeholder='type your password'
                           error={errors.password} />
                    <p>Forgot <span>Username / Password?</span></p>
                    <button className='btn-login-auth'>sign in</button>
                    <div className='bottom-auth'>
                        <p>Don't have an account?</p>
                        <button>sign up now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthComponent