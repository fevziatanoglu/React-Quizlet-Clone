import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { getFolders } from "../axios";
import FolderItem from "../components/FolderItem";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Profile() {

    const { user } = useAuth();

    const [folders, setFolders] = useState([]);

    useEffect(() => {

        getFolders(user.id)
            .then(response => {
                console.log(response.data.userFolders);
                setFolders(response.data.userFolders)
            })
            .catch(error => console.log(error));

    }, [])


    return <div className="mt-20">

        <div className="flex flex-col container lg:px-28 px-5 gap-3">
            <h1 className="font-bold text-white text-xl">Your Folders</h1>

            <div className=" grid gap-4 lg:grid-cols-3 sm:gird-cols-1 xs:grid-cols-1">

                {folders.length === 0 ? <div className="bg-purple-950 col-span-3 p-5 rounded text-white font-semibold text-xl flex flex-col justify-center items-center hover:cursor-pointer">
                    <h1>WTF MAN ADD SOME FOLDERS</h1>
                    <p className="text-sm text-gray-500">Click to add a new folder</p>
                    <AiFillPlusCircle className="text-white" size={50} />
                    </div>
                    : <>
                        <div className="flex flex-row gap-4 bg-purple-950 py-5 px-2 rounded h-[180px] border-purple-950 border-b-8 hover:border-white hover:cursor-pointer">
                          
                            <div>
                                <h1 className="font-semibold text-white text-2xl">Create a new folder</h1>
                                <p className="text-xs font-bold text-gray-500">Click to create a new folder</p>
                            </div>
                        </div>

                        <div className=" w-full grid gap-2 grid-cols-3 lg:px-28 px-4">
                            {folders.map((folder) => {
                                return <FolderItem folderName={folder.title} cardAmount={folder.cardAmount}  user={folder.userId}/>
                            })}
                        </div>
                    </>}


            </div>
        </div>
    </div>

};