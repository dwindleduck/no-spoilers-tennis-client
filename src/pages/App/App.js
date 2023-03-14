import { useState, useEffect } from "react";
// useEffect
import { Routes, Route, Navigate, Link } from "react-router-dom";
// Route, Navigate
import './App.css';

import { getUser, logOut } from "../../utilities/users-service";
import * as matchesAPI from "../../utilities/matches-api"
import * as watchedMatchesAPI from "../../utilities/watched-matches-api"

import AuthPage from "../AuthPage/AuthPage";
import Header from '../../components/Header/Header';
import MatchList from "../../components/MatchList/MatchList";
import MatchesByDay from "../MatchesByDay/MatchesByDay";


export default function App() {
  const [user, setUser] = useState(getUser())
  const [matches, setMatches] = useState([])
  const [leagues, setLeagues] = useState([])
  const [tournaments, setTournaments] = useState([])

  const [watchedMatches, setWatchedMatches] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")


  async function getAllMatches() {
      const allMatches = await matchesAPI.show()
      setMatches(allMatches)
  }

  async function getWatchedMatches() {
    const allWatched = await watchedMatchesAPI.show()
    const sortedMatches = allWatched.sort((a, b) => Date.parse(a.match.date_time) - Date.parse(b.match.date_time))

    setWatchedMatches(sortedMatches)
  }

  function getUniqueTournamentNames() {
    //get list of unique leagues and competitions
    const listOfTournaments = []
    const listOfLeagues = []

    matches.forEach(match => {
      if (!listOfTournaments.includes(match.competition)) {
        listOfTournaments.push(match.competition)
      }
      if (!listOfLeagues.includes(match.league)) {
        listOfLeagues.push(match.league)
      }

    })
    setLeagues(listOfLeagues)
    setTournaments(listOfTournaments)
  }


useEffect(() => {
  if(user) {
    getAllMatches()
    getWatchedMatches()
  }
    
}, []);



useEffect(() => {
  if(user) {
    getWatchedMatches()
    getUniqueTournamentNames()
  }
}, [matches]);



  function handleLogOut() {
    logOut(user)
    setUser(null)
    setWatchedMatches([])
    setSelectedCategory("")
  }



  return (
    <div className="App">
      <h1>No Spoilers - Tennis</h1>
      

      {user ? (
        <>
          <Header handleLogOut={handleLogOut}/>
  
          <Routes>
            {/* {user.isAdmin && <Route path="/some admin path" element={} />
            } */}

            {/* {user.isAdmin && <Route path="/*" element={<Navigate to="/some admin path" />} />} */}

            <Route path="/matches" element={<MatchesByDay 
                matches={matches}
                leagues={leagues}
                tournaments={tournaments}
                watchedMatches={watchedMatches}
                getWatchedMatches={getWatchedMatches}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                />} />

            {/* <Route path="/_______" element={} /> */}
            <Route path="/*" element={<Navigate to="/matches" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}

    </div>
  );
}