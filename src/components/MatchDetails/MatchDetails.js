import "./MatchDetails.css"


export default function MatchDetails({match}) {

    return(
        <div className="MatchDetails">
        {/* Selectively Show */}
        <p>{match.T1name} v {match.T2name}</p>


        {/* Show */}
        {/* <h4>League: {match.league}</h4>
        <h5>Tournament: {match.competition}</h5> */}
        <p>Start time: {match.date_time}</p>


        {/* Don't Show */}
        <p>Set Score: {match.T1SetScore} - {match.T2SetScore}</p>
       
    
         
         
            {/* 'match_id': self.match_id,
            'date_time': self.date_time,
            'league': self.league,
            'competition': self.competition,
            'T1name': self.T1name,
            'T2name': self.T2name,
            'T1SetScore': self.T1SetScore,
            'T2SetScore': self.T2SetScore,
            'T1Set1': self.T1Set1,
            'T2Set1': self.T2Set1,
            'T1Set2': self.T1Set2,
            'T2Set2': self.T2Set2,
            'T1Set3': self.T1Set3,
            'T2Set3': self.T2Set3,
            'T1Set4': self.T1Set4,
            'T2Set4': self.T2Set4,
            'T1Set5': self.T1Set5,
            'T2Set5': self.T2Set5,
            'status': self.status,
            'winner': self.winner,
            'created_at': self.created_at,
            'updated_at': self.updated_at, */}

        </div>
    )
}