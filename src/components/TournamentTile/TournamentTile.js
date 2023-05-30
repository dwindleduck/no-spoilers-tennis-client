import "./TournamentTile.css";
import MatchDetails from "../MatchDetails/MatchDetails"

export default function TournamentTile({
    league, tournament,
    listOfMatches
}) {

    const matches = listOfMatches.map((match, index) => (
        <MatchDetails key={index} match={match}
        />
    ))

    return(
        <div className="TournamentTile" id={tournament+league.leagueName}>
            <h4>{tournament}</h4>
            <h5>{league.leagueName}</h5>
            {matches}
        </div>
    )
}