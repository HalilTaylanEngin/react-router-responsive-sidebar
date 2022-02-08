import React from 'react';
import './login.scss'
import { AiOutlineClose } from "react-icons/ai";

const Login = ({ showLogin, setShowLogin }) => {
    return (
        <div className={!showLogin ? 'login' : 'login show'}>
            <form>
                <header>
                    <h4>Login</h4>
                    <button onClick={() => setShowLogin(false)} className='toggle-button'>
                        <AiOutlineClose />
                    </button>
                </header>
                <input type="email" name='emil' placeholder='Your email ' required />
                <input type="text" name='password' placeholder='Password' required />

                <footer>
                    <input className='button' type="submit" value="Send" />
                </footer>
            </form>
        </div>
    )
};

export default Login;
