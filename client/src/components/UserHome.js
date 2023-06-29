import { useEffect, useState } from "react";
import { getAllFolders } from "../axios";
import FolderItem from "./FolderItem";
import { AiFillPlusCircle } from "react-icons/ai";
import AddFolder from "./AddFolder";
import Modal from "./Modal";

export default function UserHome() {

    const [folders, setFolders] = useState([]);
    const [isShowAddFolderModal , setIsShowAddFolderModal] = useState(false);


    useEffect(() => {

        getAllFolders()
            .then(response => {
                setFolders(response.data.allFolders)
            })
            .catch(error => console.log(error));

    }, [])

    return <div className="mt-20">
        
        <div className="flex flex-col container lg:px-28 px-5 gap-3">
            <h1 className="font-bold text-white text-xl">Other people's folders</h1>    

            <div className=" grid gap-4 lg:grid-cols-3 sm:gird-cols-1 xs:grid-cols-1 ">
                
                <div
                onClick={()=> setIsShowAddFolderModal(true)}
                className="flex flex-row gap-4 bg-purple-950 py-5 px-2 rounded h-[180px] border-purple-950 border-b-8 hover:border-white hover:cursor-pointer">
                    <AiFillPlusCircle className="text-white" size={50} />
                    <div>
                        <h1 className="font-semibold text-white text-2xl">Create a new folder</h1>
                        <p className="text-xs font-bold text-gray-500">Click to create a new folder</p>
                    </div>
                </div>

                {folders.map((folder, index) => {
                    return <FolderItem folderName={folder.title} cardAmount={folder.cardAmount}  user={folder.userId}/>
                })}
            </div>
        </div>

                <Modal isOpen={isShowAddFolderModal} onClose={()=> setIsShowAddFolderModal(false)} title={"Create New Folder"}>
                    <AddFolder/>
                </Modal>

    </div>

}