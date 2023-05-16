
export default function MatchList({
    selectedDate,
    lastUpdated,
    tournamentTiles}) {

    // Split selectedDate into weekday, day, month (for page title)
    const parsedSelectedDate = selectedDate.toLocaleDateString(undefined, { 
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
    })
    
    //parse date for last updated message
    const parsedLastUpdated = lastUpdated.toLocaleDateString(undefined, { 
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })




    console.log(lastUpdated)

    return(
        <div className="MatchList">
            <div className="PageTitle">
                {/* <p>{dateForPageTitle}</p> */}
                <p>Matches on {parsedSelectedDate} last updated {parsedLastUpdated}</p>
            </div>
            
            {/* Tournaments */}
            {tournamentTiles}
        </div>
    )
}