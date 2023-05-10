import MatchDetails from "../MatchDetails/MatchDetails"

export default function SubCategory({
    league, tournament,
    listOfMatches
}) {

    // console.log(subCategory)
    const matches = listOfMatches.map((match, index) => (
        <MatchDetails key={index} match={match}
        />
    ))

    return(
        <div className="SubCategory">
            <h4>{tournament}</h4>
            <h5>{league.leagueName}</h5>
            {matches}
        </div>
    )
}