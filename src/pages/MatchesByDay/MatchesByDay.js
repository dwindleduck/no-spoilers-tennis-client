import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"
import "./MatchesByDay.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react"
import * as matchesAPI from "../../utilities/matches-api"
import * as watchedMatchesAPI from "../../utilities/watched-matches-api"




export default function MatchesByDay() {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedDate, selectDate] = useState(new Date());
    const [loadedDates, setLoadedDates] = useState(new Set())

    const [watchedMatches, setWatchedMatches] = useState([])
    const [leagues, setLeagues] = useState([])
    const [tournaments, setTournaments] = useState([])

    const [subCategories, setSubCategories] = useState([])




    async function getWatchedMatches(dateForAPICalls) {
        // spot to save unique competition names
        const listOfTournaments = []
        const listOfLeagues = []
        
        console.log("getting watched matches")
        const allWatched = await watchedMatchesAPI.show(dateForAPICalls)
        
        allWatched.forEach(card => {
            // keep track of unique tournaments and leagues
            if (!listOfTournaments.includes(card.match.competition)) {
                listOfTournaments.push(card.match.competition)
            }
            if (!listOfLeagues.includes(card.match.league)) {
            listOfLeagues.push(card.match.league)
            }
        })
        
        //DOES THE SORTING NEED TO HAPPEN NOW? SORTING BY CATEGORY FIRST ANYWAY...

        //sort by ascending date_time
        const sortedMatches = allWatched.sort( (a, b) =>
            (Date.parse(a.match.date_time) - Date.parse(b.match.date_time))
        || (b.match.T1name - a.match.T1name)
        )

        setWatchedMatches(sortedMatches)
        setLeagues(listOfLeagues)
        setTournaments(listOfTournaments)
    }


    async function createWatchCard(matchData, dateForAPICalls){
        console.log("createWatchCard()")
        console.log(watchedMatches)

        // if the card doesn't exist, create it
        if(watchedMatches.filter(card => card.match.match_id === matchData.match).length > 0){
            const newWatch = await watchedMatchesAPI.create(matchData, dateForAPICalls)
            return newWatch
        }
        return false
    }



    async function getMatches(dateForAPICalls) {
        // Get match_id's (GET)
        const allMatches = await matchesAPI.show(dateForAPICalls)
        // create watch cards for all match_id's
        allMatches.forEach(match => {
            const matchData = {
                match: match.match_id
            }
            createWatchCard(matchData, dateForAPICalls)
        })
    }





    // function getSubCats() {
    //     if (leagues.includes(selectedCategory)) {
    //         const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.competition))]
    //         return uniqueCats
    //     } else if (tournaments.includes(selectedCategory)){
    //         const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.league))]
    //         return uniqueCats
    //     } else return false
    // }

    function parseDateForAPICalls() {
        const year = selectedDate.getFullYear()
        let month = selectedDate.getMonth() + 1
        let day = selectedDate.getDate()
        if (month < 10) 
            month = '0' + month
        if (day < 10) 
            day = '0' + day
        return `${year}${month}${day}`
    }


    useEffect(() => {
        const dateForAPICalls = parseDateForAPICalls()
        console.log("Getting Matches for " + dateForAPICalls)

        // If this page has not been loaded
        if(!loadedDates.has(selectedDate)) {
            // get match_id's and create watch cards
            getMatches(dateForAPICalls)
        }
        
        getWatchedMatches(dateForAPICalls)
        setLoadedDates(new Set(loadedDates).add(selectedDate))
        
      }, [selectedDate]);

    // on category selection, set sub categories
    // useEffect(() => {
    //     const subCatList = getSubCats()
    //     setSubCategories(Array.from(subCatList))
    // }, [selectedCategory]);



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
                // matches={matches}
                // watchedMatches={watchedMatches}
                // getWatchedMatches={getWatchedMatches}
                leagues={leagues}
                tournaments={tournaments}
                setSelectedCategory={setSelectedCategory}
                />
           
        </div>

    )
}










    // watchedMatches, getWatchedMatches,
    // selectedCategory, setSelectedCategory


    // const [matches, setMatches] = useState([])


    //for leagues and tournaments
    //instead of array of names
    // make array of objects
    //move functionality from TournamentSelector
    //  {
            //leagueName: "",
            //userIsFollowing: false
    //  }
    // {
    //     tournament: match.competition,
    //     userIsFollowing: true
    // }




        // async function createWatchCard(allWatched, matchData){
    //     let alreadyWatching = false
    //     if(allWatched){
    //         allWatched.forEach(matchToCheck => {
    //             //console.log(typeof matchToCheck)
    //             // console.log(matchData.match)
    //             // console.log("checking")
    //             if(matchToCheck.match.match_id === matchData.match) {
    //                 alreadyWatching = true
    //             }
    //         })
    //     }
       
    //     if(!alreadyWatching) {
    //         const newWatch = await watchedMatchesAPI.create(matchData)
    //         console.log("Create a watch card")
    //         // const newWatch = "123456789"
    //         return newWatch
    //     }
    //     console.log("Already Watching")
    //     return false
    // }




    // async function getMatches(dateForAPICalls) {
        

    //     //get existing watchedMatches for comparison
    //     const allWatched = await watchedMatchesAPI.show(dateForAPICalls)
    //     // console.log(allWatched)
    
    //     // spot to save unique competition names
    //     const listOfTournaments = []
    //     const listOfLeagues = []
        
    //     //get matches
    //     const allMatches = await matchesAPI.show(dateForAPICalls)
    //     // console.log(allMatches)
    //     allMatches.forEach(match => {
    //         // if a watch card does not exist, create it
    //         const matchData = {
    //             match: match.match_id
    //         }
    //         const newCard = createWatchCard(allWatched, matchData)
    //         //putting this match in the temp array
    //         if(newCard) allWatched.push(matchData)
    

    //         // keep track of unique tournaments and leagues
    //         if (!listOfTournaments.includes(match.competition)) {
    //             listOfTournaments.push(match.competition)
    //         }
    //         if (!listOfLeagues.includes(match.league)) {
    //         listOfLeagues.push(match.league)
    //         }
    //     })

       
    //     // Sort watched matches by ascending date_time
    //     // if(allWatched){
    //     //     const sortedMatches = allWatched.sort( (a, b) =>
    //     //         (Date.parse(a.match.date_time) - Date.parse(b.match.date_time))
    //     //     || (b.match.T1name - a.match.T1name)
    //     //     )
    //     //     setWatchedMatches(sortedMatches)
    //     // }


    //     setLeagues(listOfLeagues)
    //     setTournaments(listOfTournaments)
    //     // setMatches(allMatches)
        
    // }
