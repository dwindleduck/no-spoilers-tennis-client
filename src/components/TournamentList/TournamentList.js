import TournamentSelector from "../TournamentSelector/TournamentSelector"
import "./TournamentList.css"

export default function TournamentList({league}) {
   
    const tournamentSelectors = []
    
    league.tournamentList.forEach(tournament => {
        tournamentSelectors.push(
            <TournamentSelector 
                key={tournamentSelectors.length}
                league={league}
                tournament={tournament}
                />
        )
    })
   
    return (
        <div className="TournamentList">
            <h5>{league.leagueName}</h5>
            <ul>
                {tournamentSelectors}
            </ul>
        </div>
    )
}