import { useState } from "react";
import { register } from "../axios";
import { useAuth } from "../contexts/authContext";


export default function Register() {

    const {loginUser} = useAuth();
    const [registerForm , setRegisterForm] = useState({username:"",email:"" , password:""})

    const handleOnChange = (e) => { setRegisterForm({ ...registerForm, [e.target.name]: e.target.value }); }

    const registerSubmit = (e) => {
        e.preventDefault();
        register(registerForm).
        then(response => {
            console.log({id : response.data.user._id , username : response.data.user.username})
            loginUser({id : response.data.user._id , username : response.data.user.username})
        })
        .catch(error => console.log(error.response.data.message));
        console.log(registerForm);
    }


    return (
        
            <form onSubmit={(e)=> registerSubmit(e)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* username input */}
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input onChange={(e)=> handleOnChange(e)} value={registerForm.username} name="username" class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user" type="text" placeholder="Enter Username" />
                </div>
                {/* email input */}
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input onChange={(e)=> handleOnChange(e)} value={registerForm.email} name="email" class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email Address" />
                </div>
                {/* password input */}
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input onChange={(e)=> handleOnChange(e)} value={registerForm.password} name="password" class="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Your Password"/>
                </div>
                {/* footer */}
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                    </button>

                    <div className="flex gap-1 text-sm">
                        <p>Already have an account </p>
                        <button class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Sign In </button>
                    </div>
                    
                </div>
            </form>
          
        
    )
}