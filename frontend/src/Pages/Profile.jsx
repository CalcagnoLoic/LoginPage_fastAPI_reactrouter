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
                <h1 className="text-center p-5 text-3xl font-semibold mt-15 italic underline">Hey, welcome on your profile!</h1>

                <p className="text-center text-2xl pb-[50px]"> </p>

                <div className="border-black border-1 p-5 m-5 rounded-xl xl:w-1/4 block auto bg-gray-100 drop-shadow-lg ml-auto mr-auto shadow-lg sm:w-1/2">
                    <p className="text-center text-xl pb-2">Do you want to leave your profile page?</p>
                    <button type="button" className="rounded-xl bg-red-400 p-5 w-full hover:bg-red-600 transition ml-auto mr-auto hover:text-white" onClick={signOut}>Logout</button>
                </div>
            </div>
        </>
    )
}