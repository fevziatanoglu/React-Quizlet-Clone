import NotUserHome from "../components/home/NotUserHome";
import UserHome from "../components/home/UserHome";
import { useAuth } from "../contexts/authContext";

export default function HomePage() {

    const { user } = useAuth();

    if (!user) {return <NotUserHome/>}
    return <UserHome/>

};