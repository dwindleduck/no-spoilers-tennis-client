import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import TournamentTile from "../../components/TournamentTile/TournamentTile";
import "./MatchesByDay.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"
import * as matchesAPI from "../../utilities/matches-api"
import * as watchedMatchesAPI from "../../utilities/watched-matches-api"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


export default function MatchesByDay() {
    const [selectedDate, selectDate] = useState(new Date());
    const [selectedTournaments, setSelectedTournaments] = useState([])
    const [watchedMatches, setWatchedMatches] = useState(null)
    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(true);
    const [tournamentTiles, setTournamentTiles] = useState([])


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
    

    function getUniqueCompetitions(completeWatchList){
        const listOfLeagues = []
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
            else {   
                // add League to the list with first Tournament
                listOfLeagues.push({
                    leagueName: card.match.league,
                    tournamentList: [card.match.competition,],
                })
            }            
        })
        return listOfLeagues
    }
    
    function createTournamentTiles(leagues, matches) {
        const tournamentTilesForState = []

        // Iterate over leagues
        leagues.forEach(league => {
            league.tournamentList.forEach(tournament => {
                // Check if it is a selected tournament OR all are selected
                    // if(selectedTournaments.includes(tournament) || selectedTournaments.length === 0) {
                        // add it to tournamentTilesForState
                        tournamentTilesForState.push(
                            <TournamentTile
                                key={tournamentTilesForState.length}
                                league={league}
                                tournament={tournament}
                                listOfMatches={matches.filter(card => card.match.league === league.leagueName && card.match.competition === tournament)}
                            />
                        )
                    // }
            })
        })
        setTournamentTiles(tournamentTilesForState)
    }
    
    async function getFreshMatchData() {
        // activate loading spinner
        setLoading(true)

        const dateForAPICalls = parseDateForAPICalls()

        // API call to get watch cards for the selected date
        const completeWatchList = await watchedMatchesAPI.create_and_get(dateForAPICalls)

        // save unique competition names
        const listOfLeagues = getUniqueCompetitions(completeWatchList)
 
        //sort watch cards by ascending date_time
        const sortedMatches = completeWatchList.sort( (a, b) =>
            (Date.parse(a.match.date_time) - Date.parse(b.match.date_time))
        || (b.match.T1name - a.match.T1name)
        )

        // create TournamentTiles
        createTournamentTiles(listOfLeagues, sortedMatches)

        setLeagues(listOfLeagues)
        setWatchedMatches(sortedMatches)

        setLoading(false)
    }


    useEffect(() => {
        getFreshMatchData()
    }, [selectedDate]);

    useEffect(() => {
        if(selectedTournaments.length === 0){
            //create tiles using all tournaments
            createTournamentTiles(leagues, watchedMatches)
        } else {
            //create tiles using selected tournaments
            createTournamentTiles(selectedTournaments, watchedMatches)
        }
    }, [selectedTournaments]);


    return (
        <div className="MatchesByDay">
            <Calendar onChange={selectDate} value={selectedDate}  />
            
        {loading ?
            <LoadingSpinner />
            :
            <MatchList 
                // watchedMatches={watchedMatches}
                // leagues={leagues}
                selectedDate={selectedDate}
                // selectedTournaments={selectedTournaments}
                tournamentTiles={tournamentTiles}/>

        }

            <TournamentList
                leagues={leagues}
                selectedTournaments={selectedTournaments}
                setSelectedTournaments={setSelectedTournaments}
                />
        </div>
    )
}