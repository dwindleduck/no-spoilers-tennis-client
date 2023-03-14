import TournamentSelector from "../TournamentSelector/TournamentSelector"
import "./TournamentList.css"

export default function TournamentList({
    matches,
    watchedMatches,
    getWatchedMatches,
    leagues,
    tournaments,
    setSelectedCategory}) {
   
    const leagueSelector = leagues.map((tournament, index) => (
        <TournamentSelector 
            matches={matches}
            watchedMatches={watchedMatches}
            getWatchedMatches={getWatchedMatches}
            key={index}
            tournament={tournament}
            setSelectedCategory={setSelectedCategory}
            />
    ))
    
    const tournamentList = tournaments.map((tournament, index) => (
        <TournamentSelector 
            matches={matches}
            watchedMatches={watchedMatches}
            getWatchedMatches={getWatchedMatches}
            key={index}
            tournament={tournament}
            setSelectedCategory={setSelectedCategory}
            />
    ))
   
   
    return (
        <div className="TournamentList">
            {/* <h4>Tournament Selector</h4> */}
            <h5>Leagues:</h5>
            <ul>
                {leagueSelector}
            </ul>
            <h5>Tournaments:</h5>
            <ul>
                {tournamentList}
            </ul>
        </div>
    )
}