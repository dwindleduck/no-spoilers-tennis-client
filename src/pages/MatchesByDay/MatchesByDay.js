import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"

export default function MatchesByDay({matches, leagues, tournaments, selectedTournament, setSelectedTournament}) {
    return (
        <>
            <TournamentList leagues={leagues} tournaments={tournaments} setSelectedTournament={setSelectedTournament}/>
            <MatchList matches={matches} selectedTournament={selectedTournament}/>
        </>

    )
}