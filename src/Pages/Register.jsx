import Add from "../img/addAvatar.png"
const Register = () => {
    return (
        <div className="formContainer">

            <div className="formWrapper">

                <h3 className="logo">Chatify</h3>
                <h5 className="title">Register</h5>
                <form>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <input style={{display: "none"}} type="file" name="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>
                            Add Image
                        </span>
                    </label>
                    <button type="submit">Sign Up</button>
                </form>

                <p>Already Have an Account ? <span>Login</span></p>

            </div>
            
        </div>
    );
};

export default Register;