export default function Login(){
    return(
        <div id="login-container">

            <div id="login-form">
                <div id="login-header">
                    <h1> Login  </h1>
                    <p> Please enter your Email and Password.</p>
                </div>

                <div id="lg-form-input">
                    <p>Email or Username</p>
                    <input id="email" />
                </div>

                <div id="lg-form-input">
                    <p>Password</p>
                    <input id="password" />
                </div>

                <button id="login-submit"> Login </button>
                <a href="#"> Forgot Password? </a>
                <p>New to Peak? <a href="#"> Sign Up </a> </p>




            </div>
        </div>
    )
}