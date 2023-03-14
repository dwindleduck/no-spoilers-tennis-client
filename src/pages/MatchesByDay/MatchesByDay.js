import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import "./MatchesByDay.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"


//need to send in matches filtered by date
export default function MatchesByDay({matches, leagues, tournaments, watchedMatches, getWatchedMatches, selectedCategory, setSelectedCategory}) {

    // console.log(watchedMatches)
    // console.log(matches)

    const [currentDate, selectDate] = useState(new Date());

    // useEffect(() => {
    //     // console.log(value)
    // }, [currentDate]);


    return (
        <div className="MatchesByDay">
            <Calendar onChange={selectDate} value={currentDate}  />
            
            <MatchList 
                matches={matches}
                watchedMatches={watchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                selectedCategory={selectedCategory}
                selectedDate={currentDate}/>

            <TournamentList
                matches={matches}
                watchedMatches={watchedMatches}
                getWatchedMatches={getWatchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                setSelectedCategory={setSelectedCategory}
                />
           
        </div>

    )
}