import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {fetchToken, setToken} from "./Auth";

export default function Login() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

        if (username === '' && password === '') {
            return
        } else {
            console.log('axios')
            axios.post("http://localhost:8000/login", {
                username: username,
                password: password
            })
                .then(function (response) {
                    if (response.data.token) {
                        setToken(response.data.token)
                        navigate("/profile");
                    }
                })
                .catch(function (error) {
                    console.log(error, "error");
                })
        }
    }

    return (
        <>
            <div>
                <h1 className="text-center p-5 text-2xl font-semibold mt-15"></h1>

                <div className="border-black border-1 p-5 m-5 rounded-xl xl:w-1/4 block auto bg-gray-100 drop-shadow-lg ml-auto mr-auto shadow-lg sm:w-1/2">
                    {
                        fetchToken() ? (<p>You are logged in!</p>) : (
                                <form action="" className="flex content-center gap-5 flex-col p-5 drop-shadow-lg " >
                                    <h2 className="text-center text-2xl pb-2">Login</h2>
                                    <input type="text" className="rounded p-4" placeholder="Your username..." onChange={(e) => setUsername(e.target.value)}/>

                                    <input type="password" className="rounded p-4" placeholder="Your password..." onChange={(e) => setPassword(e.target.value)}/>

                                    <button type='button' className="rounded-xl bg-red-400 p-5 w-full hover:bg-red-600 transition ml-auto mr-auto hover:text-white" onClick={login}>Login</button>

                                    <p className="text-center">Not register? <a href="#" className="text-blue-700 hover:underline">Create an account</a></p>
                                </form>
                        )
                    }
                </div>
            </div>
        </>
    );
}
