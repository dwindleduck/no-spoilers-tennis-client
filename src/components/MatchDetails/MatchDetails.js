import "./MatchDetails.css"
import { useState } from "react"

import * as watchedMatchesAPI from "../../utilities/watched-matches-api"

export default function MatchDetails({match, watchedMatches}) {

   const matchDetails = match.match
    const [shouldSpoil, setShouldSpoil] = useState(match.spoil_results)
  
    async function toggleSpoil() {
        setShouldSpoil(!shouldSpoil)

        const matchData = {
            match: matchDetails.match_id,
            spoil_results: !match.spoil_results
        }

        //api call to update watchedMatchCard
        const updatedWatchCard = await watchedMatchesAPI.update(match.id, matchData)
        return updatedWatchCard
    }

    function handleClick(event) {
        event.preventDefault()
        toggleSpoil()
    }

    // Split selectedDate into 
    //weekday, day, month (for page title)
    const options = { 
        hour: "2-digit",
        minute: "2-digit",
    };
    const dateObject = new Date(matchDetails.date_time)
    const timeForMatchDetails = dateObject.toLocaleTimeString(undefined, options)
    console.log(timeForMatchDetails)


    return(
        <div className="MatchDetails">

            {/* Show */}
            <p>{timeForMatchDetails}</p>

            {/* Selectively Show */}
            <div className="PlayerNames">
                <p>{matchDetails.T1name}</p>
                <p>{matchDetails.T2name}</p>
            </div>
            {/* ShouldSpoil section */}
            {shouldSpoil ?(
                <div className="SpoiledResults">
                    {/* <p>Set Score: {matchDetails.T1SetScore} - {matchDetails.T2SetScore}</p> */}
                    <div>{matchDetails.T1Set1}</div>
                    <div>{matchDetails.T2Set1}</div>
                    <div>{matchDetails.T1Set2}</div>
                    <div>{matchDetails.T2Set2}</div>
                    <div>{matchDetails.T1Set3}</div>
                    <div>{matchDetails.T2Set3}</div>
                    <div>{matchDetails.T1Set4}</div>
                    <div>{matchDetails.T2Set4}</div>
                    <div>{matchDetails.T1Set5}</div>
                    <div>{matchDetails.T2Set5}</div>
                </div>
                ) : (
                    <div className="HiddenResults"></div>
                )
            }

            <button onClick={handleClick}>{shouldSpoil ? "Hide Results" : "Spoil"}</button>
        </div>
    )
}


        // Match Model
        //     'match_id': self.match_id,
        //     'date_time': self.date_time,
        //     'league': self.league,
        //     'competition': self.competition,
        //     'T1name': self.T1name,
        //     'T2name': self.T2name,
        //     'T1SetScore': self.T1SetScore,
        //     'T2SetScore': self.T2SetScore,
        //     'T1Set1': self.T1Set1,
        //     'T2Set1': self.T2Set1,
        //     'T1Set2': self.T1Set2,
        //     'T2Set2': self.T2Set2,
        //     'T1Set3': self.T1Set3,
        //     'T2Set3': self.T2Set3,
        //     'T1Set4': self.T1Set4,
        //     'T2Set4': self.T2Set4,
        //     'T1Set5': self.T1Set5,
        //     'T2Set5': self.T2Set5,
        //     'status': self.status,
        //     'winner': self.winner,
        //     'created_at': self.created_at,
        //     'updated_at': self.updated_at, 