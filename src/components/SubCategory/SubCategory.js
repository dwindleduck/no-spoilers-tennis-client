import MatchDetails from "../MatchDetails/MatchDetails"
import "./SubCategory.css"

export default function SubCategory({subCategory, listOfMatches}) {
    // console.log("SubCategory")

    console.log("listOfMatches")
    console.log(listOfMatches)


    const matches = listOfMatches.map((match, index) => (
        <MatchDetails key={index} match={match}/>
    ))
    
    return(
        <div className="SubCategory">
            <h4>{subCategory}</h4>
            {matches}
        </div>
    )
}