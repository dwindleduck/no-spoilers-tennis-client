import MatchDetails from "../MatchDetails/MatchDetails"
import "./SubCategory.css"

export default function SubCategory({subCategory, listOfMatches, watchedMatches}) {
    // console.log("SubCategory")

    // console.log("listOfMatches")
    // console.log(listOfMatches)
    // console.log("watchedMatches")
    // console.log(watchedMatches)





    //loop through listOfMatches
    //get the match.match_id
    //look at watchedMatches and get object containing the match
    //save a shouldSpoil variable 





    const matches = listOfMatches.map((match, index) => (
        <MatchDetails key={index} match={match}
        // watchedMatches={watchedMatches}
        />
    ))



   
    
    return(
        <div className="SubCategory">
            <h4>{subCategory}</h4>
            {matches}
        </div>
    )
}