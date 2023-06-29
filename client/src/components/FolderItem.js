import { BsFillPersonFill } from "react-icons/bs";


export default function FolderItem({ folderName, cardAmount, user }) {

    return <div  className="flex flex-col justify-between bg-purple-950 py-5 px-4 rounded h-[180px] border-purple-950 border-b-8 hover:border-white hover:cursor-pointer">

        <div>
            <h1 className="font-semibold text-white text-2xl">{"folderName"}</h1>
            <p className="text-xs font-bold text-gray-500">Card Amount</p>
        </div>
        <div className="flex gap-2 ">
            <BsFillPersonFill className="bg-white rounded-xl" size={25} />
            <p className="text-white">Folder's Person</p>
        </div>
    </div>

}