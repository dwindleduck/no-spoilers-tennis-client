export default function TournamentSelector({tournament, setSelectedTournament}) {
   
    function handleSelectTournament() {
        setSelectedTournament(tournament)
    }
   
    return(
        <li onClick={handleSelectTournament}>{tournament}</li>
    )
}