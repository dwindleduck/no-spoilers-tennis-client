import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function DemoLoginButton({setUser}) {
    
    const credentials = {
        email: "demo@demo.demo",
        password: "demo@demo.demo"
    }
    const [error, setError] = useState('');
    
    async function handleDemoLogin(event){
        event.preventDefault()
        try {
            const user = await usersService.login(credentials);
            setUser(user);
          } catch {
            setError('Log In Failed - Try Again');
          }
    }
    
    return(
        <div className="DemoLoginButton">
            <button onClick={handleDemoLogin}>Demo Login</button>
        </div>
    )
}