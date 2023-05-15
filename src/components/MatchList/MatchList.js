
export default function MatchList({
    selectedDate,
    tournamentTiles}) {

    // Split selectedDate into weekday, day, month (for page title)
    const options = { 
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
    };
    const dateForPageTitle = selectedDate.toLocaleDateString(undefined, options)
    

    return(
        <div className="MatchList">
            <div className="PageTitle">
                <p>{dateForPageTitle}</p>
            </div>
            
            {/* Tournaments */}
            {tournamentTiles}
        </div>
    )
}