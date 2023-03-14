import SubCategory from "../SubCategory/SubCategory"
import { useState, useEffect } from "react"



//do we need to pass "matches" into this at all?
export default function MatchList({matches, watchedMatches, leagues, tournaments, selectedCategory}) {

    
    // console.log(watchedMatches)
    // console.log(matches)


    // const [filteredMatches, setFilteredMatches] = useState([])
    // const [subCategories, setSubCategories] = useState([])
    // const subCategories = []
    const [subCategories, setSubCategories] = useState([])
    const [subCategoryTiles, setSubCategoryTiles] = useState([])
    
    

    function getSubCats() {
        if (leagues.includes(selectedCategory)) {
            const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.competition))]
                console.log(uniqueCats)
            return uniqueCats
        } else if (tournaments.includes(selectedCategory)){
            const uniqueCats = [...new Set(watchedMatches.map(singleMatch => singleMatch.match.league))]
                console.log(uniqueCats)
            return uniqueCats
        } else return false



        
    }



    //IF there is a selectedCategory, filter by it
    // function filterMatches(match) {
    //     if (selectedCategory === match.competition){
    //         if (!subCategories.includes(match.league)) {
    //             subCategories.push(match.league)
    //         }
    //         // setSubCategories([...subCategories, match.league])
    //         // console.log(subCategories)
    //         return
    //     }
    //     else if (selectedCategory === match.league) {
    //         if (!subCategories.includes(match.competition)) {
    //             subCategories.push(match.competition)
    //         }
    //         // setSubCategories([...subCategories, match.competition])
    //         return true
    //     } else return false
    // }
    // //after here, matches are filtered by the selectedCategory







    function updateDisplay(){
        if(watchedMatches){
            //if the category is a league
            if (leagues.includes(selectedCategory)){
                // console.log("This is a league")

                // console.log(subCategories)
                // console.log(watchedMatches)
                // console.log(watchedMatches[0].match.league === "WTA 1000")
                //loop through the tournament list

                const leagueTiles = subCategories.map((tournament, index) =>
                    <SubCategory
                        key={index}
                        subCategory={tournament}
                        // listOfMatches={matches.filter(match => match.competition === tournament)}
                        listOfMatches={watchedMatches.filter(match => match.match.competition === tournament)}
                        // watchedMatches={watchedMatches}
                        />)
                        // console.log(leagueTiles)
                setSubCategoryTiles(leagueTiles)
                
            }//if the category is a tournament
            else if(tournaments.includes(selectedCategory)){
                // console.log("This is a tournament")
                //loop through the league list
                // console.log(filteredMatches)
                const tournamentTiles = subCategories.map((league, index) =>
                    <SubCategory
                        key={index}
                        subCategory={league}
                        // listOfMatches={matches.filter(match => match.league === league)}
                        listOfMatches={watchedMatches.filter(match => match.match.league === league)}
                        // watchedMatches={watchedMatches}
                        />)
                setSubCategoryTiles(tournamentTiles)
                    
            } else {
                // Showing all leagues
                const allLeagues = leagues.map((league, index) =>           
                    <SubCategory
                        key={index}
                        subCategory={league}
                        listOfMatches={watchedMatches.filter(match => match.match.league === league)}
                        // watchedMatches={watchedMatches}
                    />)
                
                setSubCategoryTiles(allLeagues)
            
            }
        }   
    }
       

    //this captures the initial loading
    useEffect(() => {
        updateDisplay()
    }, []);


    useEffect(() => {
        updateDisplay()
    }, [watchedMatches]);

    useEffect(() => {
        updateDisplay()
    }, [subCategories]);

    //on category change
    useEffect(() => {
        // matches = matches.filter(filterMatches)
        // selectedCategory =
        // while(subCategories.length > 0) {
        //     subCategories.pop()
        // }
        const subCatList = getSubCats()
        setSubCategories(Array.from(subCatList))


        // const matchesByCategory = matches.filter(filterMatches)
        // // console.log(matchesByCategory)
        // setFilteredMatches(matchesByCategory)

        // console.log("filteredMatches")
        // console.log(filteredMatches)
        // console.log(subCategories)

        // updateDisplay()
    }, [selectedCategory]);


    return(
        <div className="MatchList">
        <h3>{selectedCategory && selectedCategory}</h3>
        {/* Calendar Element */}

        {/* Sub Categories */}
        {subCategoryTiles}
        </div>
    )
}





