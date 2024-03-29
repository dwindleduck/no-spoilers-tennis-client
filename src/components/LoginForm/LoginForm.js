import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import "../../pages/AuthPage/AuthPage.css"

import DemoLoginButton from '../../components/DemoLoginButton/DemoLoginButton'
 
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="auth-container">
      <h2>No Spoilers - Tennis</h2>
      <h3>Sign-In</h3>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input 
            type="text" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            required />
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            required />
          <button className="auth-button" type="submit">Login</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
      <DemoLoginButton setUser={setUser} />
    </div>
  );
}