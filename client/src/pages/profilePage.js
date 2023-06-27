import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { getFolders } from "../axios";

export default function ProfilePage() {

    const { user } = useAuth();

    const folders = [];

    useEffect(() => {

        getFolders(user.id)
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error));

    }, [])

    if (!user) {
        return <Navigate to="/login" />
    }

    return <div>
        Profile Page
    </div>

};