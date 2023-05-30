import { useState } from 'react'
import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import "./AuthPage.css"
import { Link } from "react-router-dom";

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

                    <p>Already have an account? <Link to="" onClick={handleSwitchForms} className="authpage-link">Login here</Link></p>
                </>
            ) : (
                <>
                    <LoginForm setUser={setUser} />

                    <p>First time here? <Link to="" onClick={handleSwitchForms} className="authpage-link">Sign up here</Link></p>
                </>
            )}
        </>
    )
}