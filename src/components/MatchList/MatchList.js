import SubCategory from "../SubCategory/SubCategory"
import { useState, useEffect } from "react"

export default function MatchList({
    watchedMatches,
    leagues, 
    selectedTournaments,
    selectedDate}) {


    // Split selectedDate into weekday, day, month (for page title)
    const options = { 
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
    };
    const dateForPageTitle = selectedDate.toLocaleDateString(undefined, options)
    const [tournamentTiles, setTournamentTiles] = useState([])



    function updateDisplay(){
        if(watchedMatches){
            const tournamentTilesForState = []

            // Iterate over leagues
            leagues.forEach(league => {
                league.tournamentList.forEach(tournament => {
                    // Check if it is a selected tournament OR all are selected
                        if(selectedTournaments.includes(tournament) || selectedTournaments.length === 0) {
                            // Create the Tile --> Rename to TournamentTile???
                            // add it to tournamentTilesForState
                            tournamentTilesForState.push(
                                <SubCategory
                                    key={tournamentTilesForState.length}
                                    league={league}
                                    tournament={tournament}
                                    listOfMatches={watchedMatches.filter(card => card.match.league === league.leagueName && card.match.competition === tournament)}
                                />
                            )
                        }
                })
            })
            setTournamentTiles(tournamentTilesForState)
        }   
    }



    useEffect(() => {
        updateDisplay()
    }, [watchedMatches, selectedTournaments]);




    return(
        <div className="MatchList">
            <div className="PageTitle">
                <p>{dateForPageTitle}</p>
            </div>
            
            {/* Tournaments */}
            {tournamentTiles}
        </div>
    )
}