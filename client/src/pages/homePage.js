import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { getAllFolders } from "../axios";
import NotUserHome from "../components/NotUserHome";
import UserHome from "../components/UserHome";

export default function HomePage() {

    const { user } = useAuth();

    if (!user) {return <NotUserHome/>}
    return <UserHome/>

};