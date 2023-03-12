import MatchDetails from "../MatchDetails/MatchDetails"

export default function MatchList({matches, selectedTournament}) {


    if(selectedTournament) {
        matches = matches.filter(match => match.competition === selectedTournament)
    }


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





