import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext"
import { BsPersonFill } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import {BiLogOut} from "react-icons/bi"

export default function Header() {

  const { user, logoutUser } = useAuth();

  return (<>
    {user ?
    // user navbar
      <nav className="bg-blue-950">

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
      // not user navbar
      : <nav className="bg-white">

        <div className="flex h-16 items-center justify-between lg:px-5">

          <div className="flex items-center">
            <a className="font-bold text-3xl text-blue-600 hover:cursor-pointer" href="">Quizlet</a>

            <div className="ml-10 flex  gap-5 text-sm font-semibold">
              <a className="hover:cursor-pointer p-4  border-white border-b-8 hover:border-blue-500 hover:border-b-8" href="/home">Home</a>
              <a className="hover:cursor-pointer p-4  border-white border-b-8 hover:border-blue-500 hover:border-b-8" href="">Source Codes</a>

            </div>
          </div>

          <div className="flex gap-3 text-sm font-semibold">
            <button className="text-dark bg-gray-100 py-2.5 px-4 rounded-lg hover:bg-gray-300">Log in</button>
            <button className="text-dark bg-yellow-400 py-2.5 px-4 rounded-lg hover:bg-yellow-300">Sign Up</button>

          </div>

        </div>

      </nav>}







    {/* <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <a href="#" class="text-white font-semibold text-xl">Logo</a>
          </div>
          <div class="flex">
            <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Home</a>
            <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">About</a>
            <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Services</a>
            <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      </div>
    </nav> */}



  


  </>
  )

}