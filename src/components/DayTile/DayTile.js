
import { useState, useEffect } from "react"

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import LeagueSelector from "../../components/LeagueSelector/LeagueSelector";
import MatchList from "../../components/MatchList/MatchList"

import * as watchedMatchesAPI from "../../utilities/watched-matches-api"


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


export default function DayTile({selectedDate, matchList}) {
    let leagues = []
    // if there are matches returned
    if (matchList.length > 0) {
        // save unique competition names
        leagues = getUniqueCompetitions(matchList)
    } 

    return (
        <>
            <LeagueSelector leagues={leagues}/>
            <MatchList 
                selectedDate={selectedDate}
                matchList={matchList}
                leagues={leagues}
                />
        </>
    )
}