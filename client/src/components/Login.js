import { useState } from "react";
import { login } from "../axios";
import { useAuth } from "../contexts/authContext";
import { toast } from "react-toastify";


export default function Login({ toggle }) {

    const { loginUser } = useAuth();
    const [loginForm, setLoginForm] = useState({ email: "", password: "" })

    const handleOnChange = (e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }); }

    const loginSubmit = (e) => {
        e.preventDefault();
        login(loginForm).
            then(response => {
                console.log({ id: response.data.user._id, username: response.data.user.username })
                toast("Login successful!");
                loginUser({ id: response.data.user._id, username: response.data.user.username })
            })
            .catch(error => console.log(error.response.data.message));
        console.log(loginForm);
    }


    return (

        <form onSubmit={(e) => loginSubmit(e)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* email input */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input onChange={(e) => handleOnChange(e)} value={loginForm.email} name="email" className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email Address" />
            </div>
            {/* password input */}
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input onChange={(e) => handleOnChange(e)} value={loginForm.password} name="password" className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Your Password" />
                {/* footer */}
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>

                <div className="flex gap-1 text-sm">
                    <p>Don't you have an account </p>
                    <button onClick={() => toggle()} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Sign Up
                    </button>
                </div>

            </div>
        </form>


    )
}