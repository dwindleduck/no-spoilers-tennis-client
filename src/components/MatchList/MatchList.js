import MatchDetails from "../MatchDetails/MatchDetails"

export default function MatchList({matches, selectedTournament}) {


    function filterMatches(match) {
        if (selectedTournament === match.competition || selectedTournament === match.league) {
            return true
        } else return false
    }
    
    if(selectedTournament) {
        matches = matches.filter(filterMatches)
    }
    // if(selectedTournament) {
    //     matches = matches.filter(match => match.league === selectedTournament)
    // }

    const listOfMatches = matches.map((match, index) => (
        <MatchDetails key={index} match={match}/>
    ))


    return(
        <>
        <h3>Match List</h3>
        {listOfMatches}
        </>
    )
}





