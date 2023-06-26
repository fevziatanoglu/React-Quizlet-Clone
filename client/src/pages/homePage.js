import {useAuth} from "../contexts/authContext";
import {Navigate} from "react-router-dom";

export default function HomePage (){

    const {user} = useAuth();

    if(!user) {
        return <Navigate to="/login"/>
    }

    return <div>
        Home Page
    </div>

};