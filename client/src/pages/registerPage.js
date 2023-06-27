import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Link, Navigate } from "react-router-dom";
import { register } from "../axios";


export default function RegisterPage() {

    const { user, loginUser } = useAuth();
    

    const [registerForm, setRegisterForm] = useState({
        username:"",
        email: "",
        password: ""
    })

    if (user) { return <Navigate to="/home" /> }


    const handleOnChange = (e) => { setRegisterForm({ ...registerForm, [e.target.name]: e.target.value }); }

    const loginSubmit = (e) => {
        e.preventDefault();
        register(registerForm).
        then(response => {
            console.log(response)
            loginUser({id : response.data.user._id , username : response.data.user.username})
        })
        .catch(error => console.log(error.response.data.message));
        console.log(registerForm);
    }

    return <div className="d-flex justify-content-center align-items-center ">

        <div className="bg-dark p-4 mt-5 rounded border border-light border-5">

            <form className="d-flex flex-column align-items-center justify-content-center gap-2" onSubmit={(e) => loginSubmit(e)}>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username" value={registerForm.username} onChange={(e) => handleOnChange(e)} aria-describedby="emailHelp" placeholder="Enter username" />
                </div>    

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" value={registerForm.email} onChange={(e) => handleOnChange(e)} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label  >Password</label>
                    <input type="password" name="password" value={registerForm.password} onChange={(e) => handleOnChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <small  class="form-text text-muted">If you have already an account <Link to="/login">Sign In</Link></small>


                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>

        </div>
    </div>

};