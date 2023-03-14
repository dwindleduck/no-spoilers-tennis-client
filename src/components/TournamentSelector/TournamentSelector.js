import * as watchedMatchesAPI from "../../utilities/watched-matches-api"


export default function TournamentSelector({matches, watchedMatches, getWatchedMatches, tournament, setSelectedCategory}) {
   
    let isFollowingCategory = false
    //if tournament is in watchedMatches....
        // isFollowingCategory = true

    function handleSelectCategory() {
        setSelectedCategory(tournament)
    }

   
    
    async function createWatchCard(matchData){
        let alreadyWatching = false
        if(watchedMatches){
            watchedMatches.forEach(matchToCheck => {
                // console.log(matchToCheck.match)
                // console.log(match.match)
                if(matchToCheck.match === matchData) {
                    console.log("Already watching")
                    alreadyWatching = true
                }
            })
        }
       
        if(!alreadyWatching) {
            console.log("create new watch card")
            console.log(matchData)
            const newWatch = await watchedMatchesAPI.create(matchData)
            return newWatch
        }
    }
    
    
    async function handleClick(event) {
        event.preventDefault()
        //loop through matches
        // console.log(watchedMatches)
        // console.log(matches)
        matches.forEach(match => {
            // console.log(match)
            //if the match is in this tournament
            if (match.competition === tournament || match.league === tournament) {
                //start watching
                
                //build watchCard 
                const matchData = {
                    match: match.match_id
                }
                
                // console.log(watchCard)
                createWatchCard(matchData)
            }
        })
        getWatchedMatches()
    }




    return(
        <>
            <li onClick={handleSelectCategory}>{tournament}</li>
            <button value={tournament} onClick={handleClick}>{isFollowingCategory ? "Unfollow" : "Follow"}</button>
        </>
    )
}