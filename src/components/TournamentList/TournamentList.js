import TournamentSelector from "../TournamentSelector/TournamentSelector"

export default function TournamentList({leagues, tournaments, setSelectedTournament}) {
   
    const leagueSelector = leagues.map((tournament, index) => (
        <TournamentSelector 
            key={index}
            tournament={tournament}
            setSelectedTournament={setSelectedTournament}
            />
    ))

    // const tournamentList = leagues.map((tournament, index) => (
    //     <TournamentSelector 
    //         key={index}
    //         tournament={tournament}
    //         setSelectedTournament={setSelectedTournament}
    //         />
    // ))
    
    const tournamentList = tournaments.map((tournament, index) => (
        <TournamentSelector 
            key={index}
            tournament={tournament}
            setSelectedTournament={setSelectedTournament}
            />
    ))
   
   
    return (
        <>
            <ul>
                {leagueSelector}
            </ul>
            <ul>
                {tournamentList}
            </ul>
        </>
    )
}