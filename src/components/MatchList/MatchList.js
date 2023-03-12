import { useState, useEffect } from "react";
import MatchDetails from "../MatchDetails/MatchDetails"

import * as matchesAPI from "../../utilities/matches-api"


export default function MatchList() {
    const [matches, setMatches] = useState([])


    async function getAllMatches() {
      const allMatches = await matchesAPI.show()
      setMatches(allMatches)
    }

    useEffect(() => {
        getAllMatches();
    }, []);

    return(
        <>
        <h3>Match List</h3>
        {matches.map((match, index) => (
                    <MatchDetails key={index} match={match}/>
                ))}
        </>
    )
}





