import TournamentList from "../TournamentList/TournamentList";
import "./LeagueSelector.css"

export default function LeagueSelector({
    leagues,
    selectedTournaments,
    setSelectedTournaments}) {


        const leagueSelectors = []

        leagues.forEach(league => {
            leagueSelectors.push(
                <TournamentList 
                    key={leagueSelectors.length}
                    league={league}
                    selectedTournaments={selectedTournaments}
                    setSelectedTournaments={setSelectedTournaments}
                />
            )
        });


    return(
        <div className="LeagueSelector">
            {leagueSelectors}
        </div>
    )
}