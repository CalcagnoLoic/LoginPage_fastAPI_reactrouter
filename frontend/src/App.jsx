import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import {RequireToken} from "./Pages/Auth";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/profile" element={
                    <RequireToken>
                        <Profile />
                    </RequireToken>
                }/>
            </Routes>
        </div>
    );
};

export default App;
