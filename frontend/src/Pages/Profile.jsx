import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Profile() {

    const navigate = useNavigate()

    const signOut = () => {

        localStorage.removeItem('myToken')
        navigate("/");
    }

    return(
        <>
            <div>
                <h1>Profil</h1>

                <p>Hey, welcome on your profile! </p>

                <div>
                    <p>Do you want to leave your profile page?</p>
                    <button type="button" onClick={signOut}>Sign Out</button>
                </div>
            </div>
        </>
    )
}