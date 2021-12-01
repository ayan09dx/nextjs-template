/* eslint-disable @next/next/no-img-element */
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

export default function Login(){
    return(
        <div className="loginpagecontainer">
        <div className="logincontainer">
             <div className="loginimgcontainer">
                <img src="./login-img.svg" alt="login-img" className="loginimg"/>
            </div>
            <div className="logintextcontainer">
               <h2>User Login</h2>

                <div className="input-container">
                    <i className="icon"><AiOutlineMail/></i>
                    <input className="input-field" type="text" placeholder="Email" name="email"/>
                </div>
                
                <div className="input-container">
                    <i className="icon"><RiLockPasswordFill/></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw"/>
                </div>

                <button type="submit" className="btn">Login</button>
            </div>
        </div>
           

        </div>
    )
}