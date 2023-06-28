import { useEffect } from "react";
import { getAllFolders } from "../axios";

export default function UserHome() {

    const folders = [];

    useEffect(() => {

        getAllFolders()
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error));

    }, [])

    return  <div className="bg-yellow-500 min-h-screen flex  items-center pt-20">
        
    </div>

}