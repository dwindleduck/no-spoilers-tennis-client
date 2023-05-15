
export default function TournamentSelector({
    league, tournament, selectedTournaments, setSelectedTournaments
}) {
   
    function handleSelectCategory() {
        // if(!selectedTournaments.includes(tournament)) {

        //     setSelectedTournaments([...selectedTournaments, tournament])
        // }   
    }


    return(
        <>
            <li onClick={handleSelectCategory}>{tournament}</li>
            <li>{league.leagueName}</li>
            {/* <button value={tournament} onClick={handleClick}>{isFollowingCategory ? "Unfollow" : "Follow"}</button> */}
        </>
    )
}