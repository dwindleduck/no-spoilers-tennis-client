import { useState, useEffect } from "react";
// useEffect
import { Routes, Route, Navigate, Link } from "react-router-dom";
// Route, Navigate
import './App.css';

import { getUser, logOut } from "../../utilities/users-service";
import * as matchesAPI from "../../utilities/matches-api"

import AuthPage from "../AuthPage/AuthPage";
import Header from '../../components/Header/Header';
import MatchList from "../../components/MatchList/MatchList";
import MatchesByDay from "../MatchesByDay/MatchesByDay";

export default function App() {
  const [user, setUser] = useState(getUser())
  const [matches, setMatches] = useState([])
  const [leagues, setLeagues] = useState([])
  const [tournaments, setTournaments] = useState([])
  const [selectedTournament, setSelectedTournament] = useState("")


  async function getAllMatches() {
    const allMatches = await matchesAPI.show()
    setMatches(allMatches)
  }

  useEffect(() => {
      getAllMatches()
  }, []);


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
    getUniqueTournamentNames()
}, [matches]);







  function handleLogOut() {
    logOut(user)
    setUser(null)
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
                selectedTournament={selectedTournament}
                setSelectedTournament={setSelectedTournament}
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