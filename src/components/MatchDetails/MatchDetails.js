import "./MatchDetails.css"
import { useState, useEffect } from "react"

import * as watchedMatchesAPI from "../../utilities/watched-matches-api"


export default function MatchDetails({match, watchedMatches}) {


   const matchDetails = match.match

    // console.log(match.id)
    // console.log(match.spoil_results)

    const [shouldSpoil, setShouldSpoil] = useState(match.spoil_results)
    // const [watchCard, setWatchCard] = useState({})



    // function getShouldSpoil() {
    //     if(watchedMatches) {
    //         if(watchCard) {
    //             setShouldSpoil(watchCard.spoil_results)
    //         }
    //     }
    // }
    

    // useEffect(() => {
    //   return () => {
    //     if(watchedMatches) {
    //         setWatchCard(watchedMatches.find(wMatch => wMatch.match.toString() === match.match_id))
    //     }
    //     getShouldSpoil()
    //   };
    // }, []);



    // async function updateWatchCard() { 
    //     console.log(watchCard)

    //     setWatchCard({...watchCard, spoil_results: !shouldSpoil})
        

    //     //api call to update watchedMatchCard
    //     const updatedWatchCard = await watchedMatchesAPI.update(watchCard.id, watchCard)

    //     // console.log(updateWatchCard)

    //     return updatedWatchCard

    // }

    async function toggleSpoil() {

        setShouldSpoil(!shouldSpoil)

        // const updatedMatchData = {}

        const matchData = {
            match: matchDetails.match_id,
            spoil_results: !match.spoil_results
        }

        // console.log(updatedMatchData)
        //api call to update watchedMatchCard
        const updatedWatchCard = await watchedMatchesAPI.update(match.id, matchData)

        // console.log(updateWatchCard)

        return updatedWatchCard
    }

    function handleClick(event) {
        event.preventDefault()
        toggleSpoil()






        // if(watchCard) {
        //     // setShouldSpoil(!shouldSpoil)
        //     // console.log(watchCard.spoil_results)
        //     // updateWatchCard()
        // }
    }




    return(
        <div className="MatchDetails">

            <button onClick={handleClick}>{shouldSpoil ? "Hide Results" : "Spoil"}</button>


            {/* Selectively Show */}
            <p>{matchDetails.T1name} v {matchDetails.T2name}</p>


            {/* Show */}
            {/* <h4>League: {match.league}</h4>
            <h5>Tournament: {match.competition}</h5> */}
            <p>Start time: {matchDetails.date_time}</p>


            {/* Don't Show */}
            {/* <div className="HIDE"> */}
            
            {shouldSpoil ?(
                <div className="SpoiledResults">
                    <p>Set Score: {matchDetails.T1SetScore} - {matchDetails.T2SetScore}</p>
                </div>
                ) : (
                    <></>
                )
            }
         
         
            {/* 'match_id': self.match_id,
            'date_time': self.date_time,
            'league': self.league,
            'competition': self.competition,
            'T1name': self.T1name,
            'T2name': self.T2name,
            'T1SetScore': self.T1SetScore,
            'T2SetScore': self.T2SetScore,
            'T1Set1': self.T1Set1,
            'T2Set1': self.T2Set1,
            'T1Set2': self.T1Set2,
            'T2Set2': self.T2Set2,
            'T1Set3': self.T1Set3,
            'T2Set3': self.T2Set3,
            'T1Set4': self.T1Set4,
            'T2Set4': self.T2Set4,
            'T1Set5': self.T1Set5,
            'T2Set5': self.T2Set5,
            'status': self.status,
            'winner': self.winner,
            'created_at': self.created_at,
            'updated_at': self.updated_at, */}

        </div>
    )
}