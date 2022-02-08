import React from 'react';
import './register.scss'
import { AiOutlineClose } from "react-icons/ai";

const Register = ({ showRegister, setShowRegister }) => {
    return (
        <div className={!showRegister ? 'register' : 'register show'}>
            <form>
                <header>
                    <h4>Sign up</h4>
                    <button onClick={() => setShowRegister(false)} className='toggle-button'>
                        <AiOutlineClose />
                    </button>
                </header>
                <input type="email" name='emil' placeholder='Your email ' required />
                <input type="text" name='username' placeholder='Username' required />
                <input type="text" name='password' placeholder='Password' required />

                <footer>
                    <input className='button' type="submit" value="Send" />
                </footer>
            </form>
        </div>
    )
};

export default Register;
