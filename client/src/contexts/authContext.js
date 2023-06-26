import {useContext , createContext , useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=> {

    const [user , setUser] = useState( JSON.parse(localStorage.getItem("user")) || null );  

    const loginUser = (user) =>{
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    const logoutUser = () =>{
        setUser(null);
        localStorage.removeItem('user');
    }

    return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
}   

export const useAuth = () => useContext(AuthContext);