import { Button } from '@material-ui/core'
import React, {useState} from 'react'
import SignIn from '../../component/signin/signin'
import Signup from '../../component/signup/signup'
import Logo from 'https://cdn.glitch.com/bd6bfe9c-3f85-4ff2-9897-bbd5141a464a%2Fequalie.jpeg?v=1604192174749'
import "./landing.css"

const Landing = props => {
    // login or sign up page
    const [onLogin, setOnLogin] = useState(true) 
    

    return <div className="auth">
        <img src={Logo}/>
        <div className="login-signup">
            <button className={onLogin ? "on-focus" : "off-focus"} onClick={()=>setOnLogin(true)}><p className="word">Login</p></button>
            <button className={!onLogin ? "on-focus" : "off-focus"} onClick={()=>setOnLogin(false)}>Sign Up</button>
        </div>
        {onLogin ? <SignIn/> : <Signup/>}
    </div>
}

export default Landing