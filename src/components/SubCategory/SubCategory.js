import MatchDetails from "../MatchDetails/MatchDetails"

export default function SubCategory({subCategory, listOfMatches}) {

    const matches = listOfMatches.map((match, index) => (
        <MatchDetails key={index} match={match}
        />
    ))

    return(
        <div className="SubCategory">
            <h4>{subCategory}</h4>
            {matches}
        </div>
    )
}