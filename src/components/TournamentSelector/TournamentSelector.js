import * as watchedMatchesAPI from "../../utilities/watched-matches-api"

export default function TournamentSelector({
    matches,
    watchedMatches, getWatchedMatches,
    tournament, setSelectedCategory
}) {
   
    //move this to app
    let isFollowingCategory = false
    //if tournament is in watchedMatches
    watchedMatches.forEach(match => {
        if(match.match.competition === tournament || match.match.league === tournament) {
            isFollowingCategory = true
        }
    })

    function handleSelectCategory() {
        if(isFollowingCategory) {
            setSelectedCategory(tournament)
        }
    }

    async function createWatchCard(matchData){
        let alreadyWatching = false
        if(watchedMatches){
            watchedMatches.forEach(matchToCheck => {
                if(matchToCheck.match === matchData) {
                    alreadyWatching = true
                }
            })
        }
       
        if(!alreadyWatching) {
            const newWatch = await watchedMatchesAPI.create(matchData)
            return newWatch
        }
    }

    async function removeWatchCard(cardId) {
        await watchedMatchesAPI.remove(cardId)
    }
    
    async function handleClick(event) {
        event.preventDefault()

        if(isFollowingCategory) {
            //remove watch cards
            watchedMatches.forEach(match => {
                if (match.match.competition === tournament || match.match.league === tournament) {
                    //remove
                    removeWatchCard(match.id)
                }
            })
        }
        else if(!isFollowingCategory) {
            //createWatchCards
            matches.forEach(match => {
                //if the match is in this tournament
                if (match.competition === tournament || match.league === tournament) {
                    //start watching
                    const matchData = {
                        match: match.match_id
                    }
                    createWatchCard(matchData)
                }
            })
        }
        //maybe update the display in a different way
        getWatchedMatches()
    }

    return(
        <>
            <li onClick={handleSelectCategory}>{tournament}</li>
            <button value={tournament} onClick={handleClick}>{isFollowingCategory ? "Unfollow" : "Follow"}</button>
        </>
    )
}