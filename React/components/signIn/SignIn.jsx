import React, { useState } from 'react'
import "./signin.css"

import "react-icons/ri";
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import auth from 'firebase'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [toggleHelp, settoggleHelp] = useState(false);
    const [toggleSign,] = useState(false);
    const [togglePassWord, setTogglePassWord] = useState(false);
    // setToggleSign
    const navigate = useNavigate();
    // const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // some fancy firebase login shitttt....
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    navigate.push('/')
                }
            })
            .catch(error => alert("error.message"))
    }
    return (
        <div className='sign__in-bg'>
            <div className="signIn__container">
                <div className="signin__box scale-up-center">
                    <div>
                        <div className="form__box">
                            {togglePassWord && (
                                <div className="signUp__box">
                                    <form action="" className="form__2 flex__col">
                                        <input className="input__style-main" type="email" placeholder="EMAIL" required />
                                        <input className="submit__main" type="submit" value="SEND" />
                                    </form>
                                </div>
                            )}
                            <form action="" className="form__1 flex__col">
                                {/* <input className="input__style-main" type="text" placeholder="ID" value={id} onChange required /> */}
                                <input
                                    className="input__style-main"
                                    type="email"
                                    placeholder="EMAIL"
                                    value={email}
                                    onChange={
                                        e => setEmail(e.target.value)
                                    }
                                    required />
                                <input
                                    className="input__style-main"
                                    type="password"
                                    placeholder="PASSWORD"
                                    value={password}
                                    onChange={
                                        e => setPassword(e.target.value)
                                    }
                                    required />
                                {/* change to button */}
                                <input
                                    className="submit__main"
                                    type="submit"
                                    value="Sign In"
                                    onClick={signIn}
                                />
                            </form>
                            {toggleSign && (
                                <div className="signUp__box">
                                    <form action="" className="form__2 flex__col">
                                        <input className="input__style-main" type="text" placeholder="ID" required />
                                        <input className="input__style-main" type="email" placeholder="EMAIL" required />
                                        <input className="input__style-main" type="password" placeholder="PASSWORD" required />
                                        {/* <p>By signing-in you agree to Sokunmaru's Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p> */}
                                        <input
                                            className="submit__main"
                                            type="submit"
                                            value="Sign Up"
                                            onClick={register}
                                        />
                                    </form>
                                </div>
                            )}
                        </div>
                        <div className='signin__box-child_l1'>
                            {toggleHelp && (
                                <div className='signin__box-child_l2'>
                                    <div className="signin__box-child_l3">
                                        {togglePassWord
                                            ? <button className="input__style-sub" onClick={() => setTogglePassWord(false)}>Not <span>Now</span></button>
                                            : <button className="input__style-sub" onClick={() => setTogglePassWord(true)}>Forget <span>Password?</span></button>
                                        }
                                        <div className='input__style-sub' onClick={register}>Create Your <span>Account</span></div>
                                        {/* {toggleSign
                                            ? <button className="input__style-sub" onClick={() => setToggleSign(false)}>Create Your Account <span>Later</span></button>
                                            : <button className="input__style-sub" onClick={() => setToggleSign(true)}>Create Your <span>Account</span></button>
                                        } */}
                                    </div>
                                </div>
                            )}
                            {toggleHelp
                                ? <RiArrowUpSLine size={27} color="#daa520" onClick={() => settoggleHelp(false)} />
                                : <RiArrowDownSLine size={27} color="#daa520" onClick={() => settoggleHelp(true)} />
                            }
                        </div>
                    </div>
                    <div className="login__quote">
                        <p>Almost, I born with stories, and will die with a word.</p>
                        <p className="typing__animation">I am born of stories, and will die when the words in my soul run
                            out.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn