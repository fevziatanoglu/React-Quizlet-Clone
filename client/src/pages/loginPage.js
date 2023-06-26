import {useAuth} from "../contexts/authContext";
import {Navigate} from "react-router-dom";

export default function LoginPage (){

    const {user} = useAuth();

    if(user) {
        return <Navigate to="/home"/>
    }

    return <div>
        Login Page
    </div>

};