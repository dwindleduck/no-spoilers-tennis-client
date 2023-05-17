
export default function TournamentSelector({
    league, tournament, selectedTournaments, setSelectedTournaments
}) {
   
    function handleSelectTournament() {
        const listForState = selectedTournaments.map(item => item)

        const targetLeagueIndex = listForState.findIndex(selectedLeague => selectedLeague.leagueName === league.leagueName)

        //league not found, so create it
        if (targetLeagueIndex === -1) {
            // console.log("league not found, so create it")
            setSelectedTournaments([...selectedTournaments, {
                leagueName: league.leagueName,
                tournamentList: [tournament]
            }])
        //league found, tournamentList will be at least one item
        } else { 
           const targetTournamentIndex = listForState[targetLeagueIndex].tournamentList.indexOf(tournament)

            //tournament not selected
            if (targetTournamentIndex === -1) {
                // console.log("tournament not selected, add it to the list")
                //add it to the list
                listForState[targetLeagueIndex].tournamentList.push(tournament)
            }
            //tournament selected and last in the list
            else if (listForState[targetLeagueIndex].tournamentList.length === 1) {
                // console.log("tournament selected and last in the list, remove the whole league")
                //remove the whole league
                listForState.splice(targetLeagueIndex, 1)
            }
            //tournament selected
            else {
                // console.log("tournament selected, remove it from the list")
                //remove the tournament from the list
                listForState[targetLeagueIndex].tournamentList.splice(targetTournamentIndex, 1)
            }
            // console.log(listForState)
            setSelectedTournaments(listForState)
        }
    }


    return(
        <>
            <li onClick={handleSelectTournament}>{tournament}</li>
            {/* <button value={tournament} onClick={handleClick}>{isFollowingCategory ? "Unfollow" : "Follow"}</button> */}
        </>
    )
}