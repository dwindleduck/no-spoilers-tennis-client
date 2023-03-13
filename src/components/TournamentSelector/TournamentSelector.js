import * as watchedMatchesAPI from "../../utilities/watched-matches-api"


export default function TournamentSelector({matches, watchedMatches, getWatchedMatches, tournament, setSelectedCategory}) {
   
    function handleSelectCategory() {
        setSelectedCategory(tournament)
    }

   
    
    async function createWatchCard(match){
        let alreadyWatching = false
        if(watchedMatches){
            watchedMatches.forEach(matchToCheck => {
                // console.log(typeof matchToCheck.match)
                // console.log(match.match)
                if(matchToCheck.match.toString() === match.match) {
                    console.log("Already watching")
                    alreadyWatching = true
                }
            })
        }
        
        if(!alreadyWatching) {
            console.log("create new watch card")
            const newWatch = await watchedMatchesAPI.create(match)
            return newWatch
        }
    }
    
    
    async function handleClick(event) {
        event.preventDefault()
        //loop through matches
        console.log(watchedMatches)
        console.log(matches)
        matches.forEach(match => {
            //if the match is in this tournament
            if (match.competition === tournament || match.league === tournament) {
                //start watching
                
                //build watchCard 
                const watchCard = {
                    match: match.match_id
                }

                createWatchCard(watchCard)
            }
        })
        getWatchedMatches()
    }




    return(
        <>
            <li onClick={handleSelectCategory}>{tournament}</li>
            <button value={tournament} onClick={handleClick}>Follow</button>
        </>
    )
}