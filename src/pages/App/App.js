import { useState } from "react";
// useEffect
import { Routes, Route, Navigate, Link } from "react-router-dom";
// Route, Navigate
import './App.css';

import { getUser, logOut } from "../../utilities/users-service";
import * as matchesAPI from "../../utilities/matches-api"

import AuthPage from "../AuthPage/AuthPage";
import MatchList from "../../components/MatchList/MatchList";

function App() {
  const [user, setUser] = useState(getUser())




  function handleLogOut() {
    logOut()
    setUser(null)
  }



  return (
    <div className="App">
        <h1>No Spoilers - Tennis</h1>

        <Link to="" onClick={handleLogOut} className="links">
          Log Out
        </Link>

      {user ? (
        <>
          {/* <NavBar user={user} setUser={setUser} order={newOrder} resetOrder={setNewOrder}/> */}
          <Routes>
            {/* {user.isAdmin && <Route path="/some admin path" element={} />
            } */}

            {/* {user.isAdmin && <Route path="/*" element={<Navigate to="/some admin path" />} />} */}

            <Route path="/matches_component_test" element={<MatchList/>} />

            {/* <Route path="/_______" element={} /> */}
            <Route path="/*" element={<Navigate to="/matches_component_test" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}

    </div>
  );
}

export default App;
