
const Login = () => {
    return (
        <div className="formContainer">

            <div className="formWrapper">

                <h3 className="logo">Chatify</h3>
                <h5 className="title">Login</h5>
                <form>
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">Sign In</button>
                </form>

                <p> Dont Have an Account ? <span>Register</span></p>

            </div>
            
        </div>
    );
};

export default Login;