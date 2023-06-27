import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { getAllFolders } from "../axios";

export default function HomePage() {

    const { user } = useAuth();

    const folders = [];

    useEffect(() => {

        getAllFolders()
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error));

    }, [])

    if (!user) {
        return <Navigate to="/login" />
    }

    return <div>
        Home Page
    </div>

};