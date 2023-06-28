import { useAuth } from "../contexts/authContext"
import { BsPersonFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"


export default function UserNavbar(){

    const { user , logoutUser } = useAuth();

    return (
        <nav className="fixed w-full top-0 bg-blue-950">

        <div className="flex h-16 items-center justify-between lg:px-5">

          <div className="flex items-center">
            <a className="font-bold text-3xl text-white hover:cursor-pointer" href="">Quizlet</a>

            <div className="ml-10 flex  gap-5 text-sm font-semibold text-white">
              <a className="hover:cursor-pointer p-4  border-blue-950 border-b-8 hover:border-blue-500 hover:border-b-8" href="/home">Home</a>
              <a className="hover:cursor-pointer p-4  border-blue-950 border-b-8 hover:border-blue-500 hover:border-b-8" href="/profile">Your Folders</a>
            </div>
          </div>

          <div className="flex gap-3 text-sm font-semibold">


            <a className="bg-blue-500 flex p-3 rounded-3xl items-center hover:cursor-pointer hover:bg-blue-300" > <AiOutlinePlus size={25} /></a>
            <a className="bg-yellow-500 flex p-3 rounded-3xl items-center hover:cursor-pointer hover:bg-yellow-300" href="/profile"> <BsPersonFill size={25} /></a>
            <button onClick={(e)=>{logoutUser()}} className="bg-red-500 flex p-3 rounded-3xl items-center hover:cursor-pointer hover:bg-red-600"> <BiLogOut size={25} /></button>

          </div>

        </div>
       
      </nav>
    )
}