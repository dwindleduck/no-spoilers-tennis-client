import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import "./MatchesByDay.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"


//need to send in matches filtered by date
export default function MatchesByDay({
    matches, leagues,
    tournaments, watchedMatches,
    getWatchedMatches,
    selectedCategory, subCategories, setSelectedCategory}) {

    const [selectedDate, selectDate] = useState(new Date());

    return (
        <div className="MatchesByDay">
            <Calendar onChange={selectDate} value={selectedDate}  />
            
            <MatchList 
                watchedMatches={watchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                selectedCategory={selectedCategory}
                subCategories={subCategories}
                selectedDate={selectedDate}/>

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