import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { getFolders } from "../axios";
import FolderItem from "../components/FolderItem";
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