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

export default function App() {
  const [user, setUser] = useState(getUser())
  const [matches, setMatches] = useState([])
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
    //get list of unique match.competition names
    const listOfTournaments = []
    matches.forEach(match => {
      if (!listOfTournaments.includes(match.competition)) {
        listOfTournaments.push(match.competition)
      }
    })
    // console.log(listOfTournaments)
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
          {/* <NavBar user={user} setUser={setUser} order={newOrder} resetOrder={setNewOrder}/> */}
          <Routes>
            {/* {user.isAdmin && <Route path="/some admin path" element={} />
            } */}

            {/* {user.isAdmin && <Route path="/*" element={<Navigate to="/some admin path" />} />} */}

            <Route path="/matches_component_test" element={<MatchList matches={matches} selectedTournament={selectedTournament}/>} />

            {/* <Route path="/_______" element={} /> */}
            <Route path="/*" element={<Navigate to="/matches_component_test" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}

    </div>
  );
}