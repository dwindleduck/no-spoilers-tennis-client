import TournamentSelector from "../TournamentSelector/TournamentSelector"
import "./TournamentList.css"

export default function TournamentList({
    // matches,
    // watchedMatches,
    // getWatchedMatches,
    leagues,
    // tournaments,
    // tournamentList,
    // setSelectedCategory
    setSelectedTournaments
}) {
   
    
    
    
    // const leagueSelector = leagues.map((tournament, index) => (
    //     <TournamentSelector 
    //         // matches={matches}
    //         // watchedMatches={watchedMatches}
    //         // getWatchedMatches={getWatchedMatches}
    //         key={index}
    //         tournament={tournament}
    //         setSelectedCategory={setSelectedCategory}
    //         />
    // ))
    
    // const tournamentSelectors = tournaments.map((tournament, index) => (
    //     <TournamentSelector 
    //         // matches={matches}
    //         // watchedMatches={watchedMatches}
    //         // getWatchedMatches={getWatchedMatches}
    //         key={index}
    //         tournament={tournament}
    //         setSelectedCategory={setSelectedCategory}
    //         />
    // ))
   





    // const tournamentSelectors = tournamentList.map((tournament, index) => (
    //     <TournamentSelector 
    //         // matches={matches}
    //         // watchedMatches={watchedMatches}
    //         // getWatchedMatches={getWatchedMatches}
    //         key={index}
    //         tournament={tournament.tournamentName}
    //         setSelectedCategory={setSelectedCategory}
    //         />
    // ))

   
    return (
        <div className="TournamentList">
            {/* <h5>Leagues:</h5>
            <ul>
                {leagueSelector}
            </ul> */}
            <h5>Tournaments:</h5>
            <ul>
                {/* {tournamentSelectors} */}
            </ul>
        </div>
    )
}