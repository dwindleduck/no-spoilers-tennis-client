import TournamentList from "../../components/TournamentList/TournamentList"
import MatchList from "../../components/MatchList/MatchList"


//need to send in matches filtered by date
export default function MatchesByDay({matches, leagues, tournaments, selectedCategory, setSelectedCategory}) {
    return (
        <>
            <TournamentList
                leagues={leagues}
                tournaments={tournaments}
                setSelectedCategory={setSelectedCategory}
                />

            <div>
                {/* render multuple MatchList components by selectedCategory */}



                <MatchList 
                    matches={matches}
                    leagues={leagues}
                    tournaments={tournaments}
                    selectedCategory={selectedCategory}/>




            </div>




           
        </>

    )
}