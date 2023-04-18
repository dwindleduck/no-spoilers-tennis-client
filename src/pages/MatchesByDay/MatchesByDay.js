import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import "./MatchesByDay.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"
import * as matchesAPI from "../../utilities/matches-api"


export default function MatchesByDay({
    watchedMatches, getWatchedMatches,
    selectedCategory,
    setSelectedCategory}) {



// query server for watchedmatches and matches for the selectedDate
// 
// 
// 
// for each match, if a watch card does not exist, create it
// 
// 
// 
// 




    const [selectedDate, selectDate] = useState(new Date());
    const [matches, setMatches] = useState([])
    const [leagues, setLeagues] = useState([])
    const [tournaments, setTournaments] = useState([])
    const [subCategories, setSubCategories] = useState([])
    //for leagues and tournaments
    //instead of array of names
    // make array of objects
    //move functionality from TournamentSelector
    //  {
            //leagueName: "",
            //userIsFollowing: false
    //  }


    async function getAllMatches() {
        const listOfTournaments = []
        const listOfLeagues = []
        
        const allMatches = await matchesAPI.show()
        allMatches.forEach(match => {
            if (!listOfTournaments.includes(match.competition)) {
                //check if in watchedMatches....
                listOfTournaments.push(match.competition)
                // {
                //     tournament: match.competition,
                //     userIsFollowing: true
                // }
            }
            if (!listOfLeagues.includes(match.league)) {
            listOfLeagues.push(match.league)
            }
        })
        setLeagues(listOfLeagues)
        setTournaments(listOfTournaments)
        setMatches(allMatches)
    }

    function getSubCats() {
        if (leagues.includes(selectedCategory)) {
            const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.competition))]
            return uniqueCats
        } else if (tournaments.includes(selectedCategory)){
            const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.league))]
            return uniqueCats
        } else return false
    }

    useEffect(() => {
          getAllMatches()
      }, []);

    // on category selection, set sub categories
    useEffect(() => {
        const subCatList = getSubCats()
        setSubCategories(Array.from(subCatList))
    }, [selectedCategory]);










    return (
        <div className="MatchesByDay">
            <Calendar onChange={selectDate} value={selectedDate}  />
            
            <MatchList 
                watchedMatches={watchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                selectedCategory={selectedCategory}
                subCategories={subCategories}
                selectedDate={selectedDate}/>

            <TournamentList
                matches={matches}
                watchedMatches={watchedMatches}
                getWatchedMatches={getWatchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                setSelectedCategory={setSelectedCategory}
                />
           
        </div>

    )
}