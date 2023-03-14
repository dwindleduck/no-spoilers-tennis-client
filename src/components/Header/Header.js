import { Link } from "react-router-dom";


export default function Header({handleLogOut}) {
    return (
        <div className="Header">

            <h1>No Spoilers - Tennis</h1>

            <Link to="" onClick={handleLogOut} className="links">
            Log Out
            </Link>


        </div>
    )
}