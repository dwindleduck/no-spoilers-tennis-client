import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
    
    const [showSignUp, setShowSignUp] = useState(false)
    
    function handleSwitchForms(event) {
        event.preventDefault()
        setShowSignUp(!showSignUp)
    }

    return (
        <>
            {showSignUp ? (
                <>
                    <SignUpForm setUser={setUser} />
                    <p>Already have an account? Login <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
            ) : (
                <>
                    <LoginForm setUser={setUser} />
                    <p>First time here? Sign up <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
            )}
        </>
    )
}