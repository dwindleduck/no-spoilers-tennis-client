
export default function TournamentSelector({
    league, tournament, selectedTournaments, setSelectedTournaments
}) {
   
    function handleSelectTournament() {
        const targetLeague = selectedTournaments.filter(selectedLeague => selectedLeague.leagueName === league.leagueName)

        // if the league has been selected, check it's tournamentList
        if (targetLeague.length === 1) {
            const targetTournamentIndex = targetLeague[0].tournamentList.indexOf(tournament)
            
            // if SELECTED & the last tourn. in the list, remove the league
            if (targetTournamentIndex > -1 && targetLeague[0].tournamentList.length === 1) {
                // filter for not the target league
                const reducedList = selectedTournaments.filter(eachLeague => eachLeague.leagueName !== league.leagueName)
                setSelectedTournaments(reducedList)
            }
            // else if SELECTED - remove just the tournament from the list
            else if (targetTournamentIndex > -1) {
                targetLeague[0].tournamentList.splice(targetTournamentIndex, 1)
                setSelectedTournaments([...selectedTournaments, targetLeague])
            }
            // else NOT SELECTED - add it to the list
            else {
                targetLeague[0].tournamentList.push(tournament)
                setSelectedTournaments([...selectedTournaments, targetLeague])
            }
        // else add a new league to selectedTournaments  
        } else {  
            setSelectedTournaments([...selectedTournaments, {
                leagueName: league.leagueName,
                tournamentList: [tournament]
            }])
        }
    }


    return(
        <>
            <li onClick={handleSelectTournament}>{tournament}</li>
            <p>{league.leagueName}</p>
            {/* <button value={tournament} onClick={handleClick}>{isFollowingCategory ? "Unfollow" : "Follow"}</button> */}
        </>
    )
}