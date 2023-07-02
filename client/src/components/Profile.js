import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authContext";
import { getFolders } from "../axios";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "./Modal";
import AddCard from "./card/AddCard";
import FolderItem from "./folder/FolderItem";

export default function Profile() {

    const { user } = useAuth();

    const [folders, setFolders] = useState([]);
    const [isShowAddFolderModal, setIsShowAddFolderModal] = useState(false);

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

                {folders.length === 0 ? <div
                    onClick={(e) => setIsShowAddFolderModal(true)}
                    className="bg-purple-950 col-span-3 p-5 rounded text-white font-semibold text-xl flex flex-col justify-center items-center hover:cursor-pointer">
                    <h1>WTF MAN ADD SOME FOLDERS</h1>
                    <p className="text-sm text-gray-500">Click to add a new folder</p>
                    <AiFillPlusCircle className="text-white" size={50} />
                </div>
                    : <>
                        <div
                            onClick={() => setIsShowAddFolderModal(true)}
                            className="flex flex-row gap-4 bg-purple-950 py-5 px-2 rounded h-[180px] border-purple-950 border-b-8 hover:border-white hover:cursor-pointer">
                            <AiFillPlusCircle className="text-white" size={50} />
                            <div>
                                <h1 className="font-semibold text-white text-2xl">Create a new folder</h1>
                                <p className="text-xs font-bold text-gray-500">Click to create a new folder</p>
                            </div>
                        </div>


                        {folders.map((folder) => {
                            return <FolderItem  key={folder._id} folder={folder} user={folder.userId} />
                        })}



                    </>}

                {/* add folder modal */}
                <Modal isOpen={isShowAddFolderModal} onClose={() => setIsShowAddFolderModal(false)} title={"Create New Folder"}>
                    <AddCard />
                </Modal>
            </div>
        </div>
    </div>

};