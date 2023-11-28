import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import { getUser, logOut } from "../../utilities/users-service";

import AuthPage from "../AuthPage/AuthPage";
import Header from '../../components/Header/Header';
import MatchesByDay from "../MatchesByDay/MatchesByDay";


export default function App() {
  const [user, setUser] = useState(getUser())

  function handleLogOut() {
    logOut(user)
    setUser(null)
  }

  return (
    <div className="App">
      
      {user ? (
        <>
          <Header handleLogOut={handleLogOut}/>
  
          <Routes>
            <Route path="/" element={<MatchesByDay />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}