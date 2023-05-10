import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import "./MatchesByDay.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"
import * as matchesAPI from "../../utilities/matches-api"
import * as watchedMatchesAPI from "../../utilities/watched-matches-api"




export default function MatchesByDay() {
    const [selectedDate, selectDate] = useState(new Date());
    const [selectedTournaments, setSelectedTournaments] = useState([])
    const [watchedMatches, setWatchedMatches] = useState([])
    const [leagues, setLeagues] = useState([])




    // async function testWatchedMatchesEndpoint(dateForAPICalls) {
    //     const responseData = await watchedMatchesAPI.create_and_get(dateForAPICalls)
    //     console.log(responseData)
    //     // return responseData
    // }


    async function getFreshMatchData(dateForAPICalls) {
        console.log("getFreshMatchData()")

        // Get match_id's (GET)
        // const allMatches = await matchesAPI.show(dateForAPICalls)
        // const allWatched = await watchedMatchesAPI.show(dateForAPICalls)
        // const newWatched = []


        // spot to save unique competition names
        const listOfLeagues = []

        // create watch cards for all match_id's
        // await Promise.all(allMatches.map(async(match) => {
        //     //if the card does not exist, create it
        //     if (allWatched.filter(card => card.match.match_id === match.match_id).length === 0 &&
        //     newWatched.filter(card => card.match.match_id === match.match_id).length === 0
        //     ){
        //         const matchData = {
        //             match: match.match_id
        //         }
        //         const newCard = await watchedMatchesAPI.create(matchData, dateForAPICalls)
        //         // add to newWatched to stop duplicate POST requests
        //         newWatched.push(newCard)
        //         console.log("createWatchCard()")
        //     }
        // }))
        
        // const completeWatchList = [...allWatched, ...newWatched]
        // const completeWatchList = await watchedMatchesAPI.show(dateForAPICalls)
        const completeWatchList = await watchedMatchesAPI.create_and_get(dateForAPICalls)

        console.log("Complete Watch List")
        console.log(completeWatchList)

        completeWatchList.forEach(card => {
            // keep track of unique tournaments
            const targetLeague = listOfLeagues.filter(league => league.leagueName === card.match.league)

            //if the league is IN THE LIST
            if (targetLeague.length === 1) {
                //if the tournament is not in the list
                if (!targetLeague[0].tournamentList.includes(card.match.competition)){
                    // add Tournament to the list
                    targetLeague[0].tournamentList.push(card.match.competition)
                }
            }
            //if this league is NOT IN THE LIST
            // if(listOfLeagues.filter(league => league.leagueName === card.match.league).length === 0){
            else {   
                // add League to the list with first Tournament
                listOfLeagues.push({
                    leagueName: card.match.league,
                    tournamentList: [card.match.competition,],
                })
            }            
        })


        
        //DOES THE SORTING NEED TO HAPPEN NOW? SORTING BY CATEGORY FIRST ANYWAY...
        //sort by ascending date_time
        const sortedMatches = completeWatchList.sort( (a, b) =>
            (Date.parse(a.match.date_time) - Date.parse(b.match.date_time))
        || (b.match.T1name - a.match.T1name)
        )

        setWatchedMatches(sortedMatches)
        setLeagues(listOfLeagues)
        console.log("End of getFreshMatchData()")
    }



    function parseDateForAPICalls() {
        const year = selectedDate.getFullYear()
        let month = selectedDate.getMonth() + 1
        let day = selectedDate.getDate()
        if (month < 10) 
            month = '0' + month
        if (day < 10) 
            day = '0' + day
        return `${year}${month}${day}`
    }


    useEffect(() => {
        const dateForAPICalls = parseDateForAPICalls()
        getFreshMatchData(dateForAPICalls)
        // testWatchedMatchesEndpoint(dateForAPICalls)
    }, [selectedDate]);


    return (
        <div className="MatchesByDay">
            <Calendar onChange={selectDate} value={selectedDate}  />
            
            <MatchList 
                watchedMatches={watchedMatches}
                leagues={leagues}
                selectedDate={selectedDate}
                selectedTournaments={selectedTournaments}/>

            <TournamentList
                leagues={leagues}
                setSelectedTournaments={setSelectedTournaments}
                />
        </div>
    )
}