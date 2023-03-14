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
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}
            {showSignUp ? 
                <>
                    <p>Already have an account? Login <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
                : 
                <>
                    <p>First time ordering? Sign up <a className="authpage-link" onClick={handleSwitchForms} href="">here</a></p>
                </>
            }
        </>
    )
}