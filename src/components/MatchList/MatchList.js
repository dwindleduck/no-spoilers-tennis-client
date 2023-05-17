import "./MatchList.css"

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
    
    let parsedLastUpdated = undefined
    //parse date for last updated message
    if (tournamentTiles.length > 0){
        parsedLastUpdated = lastUpdated.toLocaleDateString(undefined, { 
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        })
    }




    // console.log(lastUpdated)

    return(
        <div className="MatchList">
            <div className="PageTitle">
                {/* <p>{dateForPageTitle}</p> */}
                <p>{parsedSelectedDate}</p>
                
                {tournamentTiles.length === 0 ?
                    <p>No matches today</p>
                    :
                    <p id="last-updated">matches for this day last updated {parsedLastUpdated}</p>
                }
            </div>
            
            {/* Tournaments */}
            {tournamentTiles}
        </div>
    )
}