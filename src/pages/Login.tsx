import "./Login.css"
import {Link} from "react-router-dom";

function Login() {
    // js code
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

    return (
        <>
        <div className="container">
            <div className="header">
                <h1>Login</h1>
            </div>
            <div className="inputs">
                    <div className="input-box">
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className="input-box">
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <Link to={"/list"} className="navi">
                    <button type="submit" className="btn">
                        Login
                    </button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Login;