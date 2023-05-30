export default function TournamentSelector({league, tournament}) {
   
    function handleClick(event) {
        event.preventDefault()
        document.querySelector(`[id="${tournament+league.leagueName}"]`).scrollIntoView()
    }

    return(
        <li onClick={handleClick}>{tournament}</li>
    )
}