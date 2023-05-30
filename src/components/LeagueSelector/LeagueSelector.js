import TournamentList from "../TournamentList/TournamentList";
import "./LeagueSelector.css"

export default function LeagueSelector({leagues}) {
    const leagueSelectors = []

    leagues.forEach(league => {
        leagueSelectors.push(
            <TournamentList 
                key={leagueSelectors.length}
                league={league}
            />
        )
    });

    return(
        <div className="LeagueSelector">
            {leagueSelectors}
        </div>
    )
}