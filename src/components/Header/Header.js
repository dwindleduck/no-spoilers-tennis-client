import { Link } from "react-router-dom";


export default function Header({handleLogOut}) {
    return (
        <>

            

            <Link to="" onClick={handleLogOut} className="links">
            Log Out
            </Link>


        </>
    )
}