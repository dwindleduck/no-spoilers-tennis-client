import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import './App.css';

import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());




  return (
    <div className="App">
        <h1>No Spoilers - Tennis</h1>

      {user ? (
        <>
          {/* <NavBar user={user} setUser={setUser} order={newOrder} resetOrder={setNewOrder}/> */}
          <Routes>
            {/* {user.isAdmin && <Route path="/some admin path" element={} />
            } */}

            {/* {user.isAdmin && <Route path="/*" element={<Navigate to="/some admin path" />} />} */}

            {/* <Route path="/_______" element={} /> */}

            {/* <Route path="/_______" element={} /> */}
            {/* <Route path="/*" element={<Navigate to="/______" />} /> */}
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}

    </div>
  );
}

export default App;
