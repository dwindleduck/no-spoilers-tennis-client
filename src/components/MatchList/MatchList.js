import SubCategory from "../SubCategory/SubCategory"
import { useState, useEffect } from "react"



export default function MatchList({matches, leagues, tournaments, selectedCategory}) {

    const [filteredMatches, setFilteredMatches] = useState([])
    // const [subCategories, setSubCategories] = useState([])
    const subCategories = []
    const [subCategoryTiles, setSubCategoryTiles] = useState([])
    
    
    //IF there is a selectedCategory, filter by it
    function filterMatches(match) {

        
        if (selectedCategory === match.competition){
            if (!subCategories.includes(match.league)) {
                subCategories.push(match.league)
            }
            // setSubCategories([...subCategories, match.league])
            // console.log(subCategories)
            return
        }
        else if (selectedCategory === match.league) {
            if (!subCategories.includes(match.competition)) {
                subCategories.push(match.competition)
            }
            // setSubCategories([...subCategories, match.competition])
            return true
        } else return false
    }
    //after here, matches are filtered by the selectedCategory







    function updateDisplay(){
        //if the category is a league
        if (leagues.includes(selectedCategory)){
            console.log("This is a league")
            while(subCategories.length > 0) {
                subCategories.pop()
            }
            const matchesByCategory = matches.filter(filterMatches)
            setFilteredMatches(matchesByCategory)

            console.log(filteredMatches)
            console.log(subCategories)

            //loop through the tournament list
            const leagueTiles = subCategories.map((tournament, index) => <SubCategory key={index} subCategory={tournament} listOfMatches={matches.filter(match => match.competition === tournament)}/>)
            console.log("leagueTiles")
            console.log(leagueTiles)

            setSubCategoryTiles(leagueTiles)
            
        }//if the category is a tournament
        else if(tournaments.includes(selectedCategory)){
            console.log("This is a tournament")
            while(subCategories.length > 0) {
                subCategories.pop()
            }
            const matchesByCategory = matches.filter(filterMatches)
            setFilteredMatches(matchesByCategory)
            
            console.log(filteredMatches)
            console.log(subCategories)

            //loop through the league list
            const tournamentTiles = subCategories.map((league, index) => <SubCategory key={index} subCategory={league} listOfMatches={matches.filter(match => match.league === league)}/>)
            console.log("tournamentTiles")
            console.log(tournamentTiles)
            setSubCategoryTiles(tournamentTiles)
                
        } else {
            // Showing all leagues
            const allLeagues = leagues.map((league, index) => <SubCategory key={index} subCategory={league} listOfMatches={matches.filter(match => match.league === league)}/>)
            
            setSubCategoryTiles(allLeagues)
        }
    }
       

    //this captures the initial loading
    useEffect(() => {
        updateDisplay()
    }, [leagues]);
    //on category change
    useEffect(() => {
        // matches = matches.filter(filterMatches)
        selectedCategory =
        updateDisplay()
    }, [selectedCategory]);


    return(
        <>
        <h3>{selectedCategory && selectedCategory}</h3>
        {/* Calendar Element */}

        {/* Sub Categories */}
        {subCategoryTiles}
        </>
    )
}





