
import { useAuth } from "../../contexts/authContext"
import UserNavbar from "./UserNavbar";
import NotUserNavbar from "./NotUserNavbar";

export default function Header() {

  const { user } = useAuth();

  return (<>{user ? <UserNavbar/> : <NotUserNavbar/>} </>)}