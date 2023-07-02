import { useAuth } from "../../contexts/authContext"
import { BsPersonFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { useState } from "react";
import Modal from "../Modal";
import AddFolder from "../folder/AddFolder";


export default function UserNavbar() {

  const { user, logoutUser } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isShowAddFolderModal, setIsShowAddFolderModal] = useState(false);

  return (<>
    {/* navbar */}
    <nav className="fixed w-full top-0 bg-blue-950">
      {/* main div */}
      <div className="flex h-16 items-center justify-between lg:px-5">

        {/* pages div */}
        <div className="flex items-center">
          <a className="font-bold text-3xl text-white hover:cursor-pointer" href="">Quizlet</a>

          <div className="ml-10 flex  gap-5 text-sm font-semibold text-white">
            <a className="hover:cursor-pointer p-4  border-blue-950 border-b-8 hover:border-blue-500 hover:border-b-8" href="/home">Home</a>
            <a className="hover:cursor-pointer p-4  border-blue-950 border-b-8 hover:border-blue-500 hover:border-b-8" href="/profile">Your Folders</a>
          </div>
        </div>

        {/* buttons div */}
        <div className="flex gap-3 text-sm font-semibold">

          {/* add folder button */}
          <button
            onClick={(e)=> setIsShowAddFolderModal(true)}
            className="bg-blue-500 flex p-3 rounded-3xl items-center hover:cursor-pointer hover:bg-blue-300" >
            <AiOutlinePlus size={25} />
          </button>

          {/* dropdown menu */}
          <button
            onClick={() => { setIsDropdownOpen((prev) => !prev); }}
            className="bg-yellow-500 flex p-3 rounded-3xl items-center hover:cursor-pointer hover:bg-yellow-300">
            <BsPersonFill size={25} />
          </button>
          {/* menu */}
          {isDropdownOpen && <div className="absolute top-20 right-10 bg-blue-600 h-[250px] w-[250px] rounded flex flex-col p-5 gap-5">

            <div className="flex flex-row justify-start items-center gap-2">
              <BsPersonFill size={25} className="bg-white rounded-xl" />
              <div className="flex flex-col">
                <h1 className="text-black font-semibold text-md">{user.username}</h1>
                <p className="text-gray-400 text-xs">{user.email}</p>
              </div>
            </div>

            <hr></hr>

            <a className="flex justify-center p-2 hover:bg-blue-200 rounded font-semibold" href="profile">Got to Profile</a>
            <button
              onClick={(e) => { logoutUser() }}
              className="flex justify-center p-2 hover:bg-red-500 rounded font-semibold gap-2" href="">
              <BiLogOut size={25} />
              Logout
            </button>

          </div>}

          <button onClick={(e) => { logoutUser() }} className="bg-red-500 flex p-3 rounded-3xl items-center hover:cursor-pointer hover:bg-red-600"> <BiLogOut size={25} /></button>

        </div>

      </div>

    </nav>
       
    {/* add folder modal */}
    <Modal isOpen={isShowAddFolderModal} onClose={() => setIsShowAddFolderModal(false)} title={"Create New Folder"}>
      <AddFolder />
    </Modal>
  </>
  )
}