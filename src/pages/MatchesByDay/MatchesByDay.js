import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import "./MatchesByDay.css";


//need to send in matches filtered by date
export default function MatchesByDay({matches, leagues, tournaments, watchedMatches, getWatchedMatches, selectedCategory, setSelectedCategory}) {

    // console.log(watchedMatches)
    // console.log(matches)

    return (
        <div className="MatchesByDay">
            <TournamentList
                matches={matches}
                watchedMatches={watchedMatches}
                getWatchedMatches={getWatchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                setSelectedCategory={setSelectedCategory}
                />


            <MatchList 
                matches={matches}
                watchedMatches={watchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                selectedCategory={selectedCategory}/>


           
        </div>

    )
}