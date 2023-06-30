import { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { getUser } from "../axios";
import { Link } from "react-router-dom";


export default function FolderItem({ folderId, folderName, cardAmount, user }) {

    const [username, setUsername] = useState(null)

    useEffect(() => {
        getUser(user).then(response => setUsername(response.data.user.username)).catch(error => console.log(error));
    })

    return <a
        href={`folder/${folderId}`}
        className="flex flex-col justify-between bg-purple-950 py-5 px-4 rounded h-[180px] border-purple-950 border-b-8 hover:border-white hover:cursor-pointer">
        <div>
            <h1 className="font-semibold text-white text-2xl">{folderName}</h1>
            <p className="text-xs font-bold text-gray-500">{cardAmount || 0} Item</p>
        </div>
        <div className="flex gap-2 ">
            <BsFillPersonFill className="bg-white rounded-xl" size={25} />
            <p className="text-white">{username || "Anonymous"}</p>
        </div>
    </a>

}