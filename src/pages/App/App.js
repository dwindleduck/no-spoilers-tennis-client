import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import { getUser, logOut } from "../../utilities/users-service";
import * as matchesAPI from "../../utilities/matches-api"
import * as watchedMatchesAPI from "../../utilities/watched-matches-api"

import AuthPage from "../AuthPage/AuthPage";
import Header from '../../components/Header/Header';
import MatchesByDay from "../MatchesByDay/MatchesByDay";


export default function App() {
  const [user, setUser] = useState(getUser())

  // We are not using "matches" to render any components, only for Follow Tournament button.
  // All rendering and other logic happens on "watchedMatches"
  // const [matches, setMatches] = useState([])
  // const [leagues, setLeagues] = useState([])
  // const [tournaments, setTournaments] = useState([])

  
  const [watchedMatches, setWatchedMatches] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  // const [subCategories, setSubCategories] = useState([])


  
  // async function getAllMatches() {
  //     const allMatches = await matchesAPI.show()
  //     setMatches(allMatches)
  // }

  async function getWatchedMatches() {
    const allWatched = await watchedMatchesAPI.show()
    //sort by ascending date_time
    const sortedMatches = allWatched.sort( (a, b) =>
        (Date.parse(a.match.date_time) - Date.parse(b.match.date_time))
      || (b.match.T1name - a.match.T1name)
    )
    setWatchedMatches(sortedMatches)
  }

  // function getUniqueTournamentNames() {
  //   //get list of unique leagues and competitions
  //   const listOfTournaments = []
  //   const listOfLeagues = []

  //   matches.forEach(match => {
  //     if (!listOfTournaments.includes(match.competition)) {
  //       listOfTournaments.push(match.competition)
  //     }
  //     if (!listOfLeagues.includes(match.league)) {
  //       listOfLeagues.push(match.league)
  //     }
  //   })
  //   setLeagues(listOfLeagues)
  //   setTournaments(listOfTournaments)
  // }

  // function getSubCats() {
  //     if (leagues.includes(selectedCategory)) {
  //         const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.competition))]
  //         return uniqueCats
  //     } else if (tournaments.includes(selectedCategory)){
  //         const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.league))]
  //         return uniqueCats
  //     } else return false
  // }

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

//after watchedMatches have updated
//get all matches
//do we need to do this here?
//can it wait until the "matches" array is used?
// useEffect(() => {
//   if(user) {
//     getAllMatches()
//   }
// }, [watchedMatches]);

//on matches loaded, get league and tournament lists
// useEffect(() => {
//   if(user) {
//     // getWatchedMatches()
//     getUniqueTournamentNames()
//   }
// }, [matches]);

// on category selection, set sub categories
// useEffect(() => {
//   const subCatList = getSubCats()
//   setSubCategories(Array.from(subCatList))
// }, [selectedCategory]);






  return (
    <div className="App">
      

      {user ? (
        <>
          <Header handleLogOut={handleLogOut}/>
  
          <Routes>
            <Route path="/matches" element={<MatchesByDay 
                // matches={matches}
                // leagues={leagues}
                // tournaments={tournaments}
                watchedMatches={watchedMatches}
                getWatchedMatches={getWatchedMatches}
                selectedCategory={selectedCategory}
                // subCategories={subCategories}
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