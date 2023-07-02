import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import Profile from "../components/Profile";

export default function ProfilePage() {

    const { user } = useAuth();

    

    if (!user) {
        return <Navigate to="/login" />
    }

    return <div>

            <Profile/>

        
    </div>

};