import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { login } from "../axios";


export default function LoginPage() {

    const { user, loginUser } = useAuth();
    

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    if (user) { return <Navigate to="/home" /> }


    const handleOnChange = (e) => { setLoginForm({ ...loginForm, [e.target.name]: e.target.value }); }

    const loginSubmit = (e) => {
        e.preventDefault();
        login(loginForm).
        then(response => {
            console.log({id : response.data.user._id , username : response.data.user.username})
            loginUser({id : response.data.user._id , username : response.data.user.username})
        })
        .catch(error => console.log(error.response.data.message));
        console.log(loginForm);
    }

    return <div className="d-flex justify-content-center align-items-center ">

        <div className="bg-dark p-4 mt-5 rounded border border-light border-5">

            <form className="d-flex flex-column align-items-center justify-content-center gap-2" onSubmit={(e) => loginSubmit(e)}>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" value={loginForm.email} onChange={(e) => handleOnChange(e)} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label  >Password</label>
                    <input type="password" name="password" value={loginForm.password} onChange={(e) => handleOnChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>


                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>

        </div>
    </div>

};