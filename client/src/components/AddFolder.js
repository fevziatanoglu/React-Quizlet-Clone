import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { addFolder } from "../axios";


export default function AddFolder() {

    const { user } = useAuth();

    const [formData, setFormData] = useState({
        userId: user.id,
        title: "",
        description: ""
    });

    const handleOnChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); }



    function submitAddFolder(e) {
        e.preventDefault();
        console.log(formData);
        addFolder(formData).then(response => console.log(response)).then(error => console.log(error));
    }

    return <form onSubmit={(e)=> submitAddFolder(e)} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* email input */}
        <div className="mb-4">

            <input onChange={(e)=> handleOnChange(e)} name="title" className="shadow  border-yellow-500 border-b-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-b-8 focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Folder Name" />
        </div>
        {/* password input */}
        <div className="mb-6">
            <input onChange={(e)=> handleOnChange(e)} name="description" className="shadow  border-yellow-500 border-b-4 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-b-8 focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Folder description" />
            {/* footer */}
        </div>

        <hr></hr>

        <div className="flex items-center justify-end p-2">
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add Cards
            </button>



        </div>
    </form>
}