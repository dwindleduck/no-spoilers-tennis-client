import SubCategory from "../SubCategory/SubCategory"
import { useState, useEffect } from "react"

export default function MatchList({
    watchedMatches,
    leagues, tournaments,
    selectedCategory, subCategories,
    selectedDate}) {

    // Split selectedDate into 
    //weekday, day, month (for page title)
    const options = { 
        weekday: 'short',
        month: 'numeric',
        day: 'numeric'
    };
    const dateForPageTitle = selectedDate.toLocaleDateString(undefined, options)
    //for rendering
    const [subCategoryTiles, setSubCategoryTiles] = useState([])

    function updateDisplay(){
        if(watchedMatches){
            const matchesSelectedByDate = watchedMatches.filter(match =>
                new Date(match.match.date_time).toLocaleDateString(undefined, options) === dateForPageTitle)
            //if the category is a league
            if (subCategories && leagues.includes(selectedCategory)){
                //loop through the tournament list
                const leagueTiles = subCategories.map((tournament, index) =>
                    <SubCategory
                        key={index}
                        subCategory={tournament}
                        listOfMatches={matchesSelectedByDate.filter(match => match.match.competition === tournament)}
                        />)
                setSubCategoryTiles(leagueTiles)
            }//if the category is a tournament
            else if(subCategories && tournaments.includes(selectedCategory)){
                //loop through the league list
                const tournamentTiles = subCategories.map((league, index) =>
                    <SubCategory
                        key={index}
                        subCategory={league}
                        listOfMatches={matchesSelectedByDate.filter(match => match.match.league === league)}
                        />)
                setSubCategoryTiles(tournamentTiles)
            } else {
                // Showing all leagues
                const allLeagues = leagues.map((league, index) =>           
                    <SubCategory
                        key={index}
                        subCategory={league}
                        listOfMatches={matchesSelectedByDate.filter(match => match.match.league === league)}
                    />)
                setSubCategoryTiles(allLeagues)
            }
        }   
    }

    useEffect(() => {
        updateDisplay()
    }, [watchedMatches, selectedCategory, selectedDate]);

    return(
        <div className="MatchList">
            <div className="PageTitle">
                <p>{dateForPageTitle}</p>
                <h3>{selectedCategory && selectedCategory}</h3>
            </div>
            
            {/* Sub Categories */}
            {subCategoryTiles}
        </div>
    )
}





