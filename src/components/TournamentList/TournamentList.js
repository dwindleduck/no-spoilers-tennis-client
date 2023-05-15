import TournamentSelector from "../TournamentSelector/TournamentSelector"
import "./TournamentList.css"

export default function TournamentList({
    leagues,
    selectedTournaments,
    setSelectedTournaments
}) {
   
    console.log(selectedTournaments)
    
    const tournamentSelectors = []
    
    leagues.forEach(league => {
        league.tournamentList.forEach(tournament => {
            tournamentSelectors.push(
                <TournamentSelector 
                    key={tournamentSelectors.length}
                    league={league}
                    tournament={tournament}
                    selectedTournaments={selectedTournaments}
                    setSelectedTournaments={setSelectedTournaments}
                    />
            )
        })
    });
    
    

   
    return (
        <div className="TournamentList">
            {/* <h5>Leagues:</h5>
            <ul>
                {leagueSelector}
            </ul> */}
            {/* <h5>Tournaments:</h5> */}
            <ul>
                {tournamentSelectors}
            </ul>
        </div>
    )
}