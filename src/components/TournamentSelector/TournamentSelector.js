export default function TournamentSelector({tournament, setSelectedCategory}) {
   
    function handleSelectCategory() {
        setSelectedCategory(tournament)
    }
   
    return(
        <li onClick={handleSelectCategory}>{tournament}</li>
    )
}