import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import { getUser, logOut } from "../../utilities/users-service";
import * as watchedMatchesAPI from "../../utilities/watched-matches-api"

import AuthPage from "../AuthPage/AuthPage";
import Header from '../../components/Header/Header';
import MatchesByDay from "../MatchesByDay/MatchesByDay";


export default function App() {
  const [user, setUser] = useState(getUser())
  // We are not using "matches" to render any components, only for Follow Tournament button.
  // All rendering and other logic happens on "watchedMatches"
  const [watchedMatches, setWatchedMatches] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")


  async function getWatchedMatches() {
    const allWatched = await watchedMatchesAPI.show()
    //sort by ascending date_time
    const sortedMatches = allWatched.sort( (a, b) =>
        (Date.parse(a.match.date_time) - Date.parse(b.match.date_time))
      || (b.match.T1name - a.match.T1name)
    )
    setWatchedMatches(sortedMatches)
  }

  function handleLogOut() {
    logOut(user)
    setUser(null)
    setWatchedMatches([])
    setSelectedCategory("")
  }


//on initial load
useEffect(() => {
  if(user) {
    getWatchedMatches()
  }
}, []);

//on user login
useEffect(() => {
  if(user) {
    getWatchedMatches()
  }
}, [user]);


  return (
    <div className="App">
      
      {user ? (
        <>
          <Header handleLogOut={handleLogOut}/>
  
          <Routes>
            <Route path="/matches" element={<MatchesByDay 
                watchedMatches={watchedMatches}
                getWatchedMatches={getWatchedMatches}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />} />
            <Route path="/*" element={<Navigate to="/matches" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}