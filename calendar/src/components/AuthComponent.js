import './../css/AuthComponent.css'

const AuthComponent = () => {
    return (
        <div className='main-auth'>
            <div className='container-auth'>
                <div className='top-auth'>
                    <p>Sign In</p>
                </div>
                <form>
                    <input placeholder='Username' />
                    <input placeholder='Password' />
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