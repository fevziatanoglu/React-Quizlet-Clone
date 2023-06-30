import { useEffect, useState } from "react"
import { getCards, getFolder, updateFolder } from "../axios";
import { toast } from "react-toastify";
import CardEditItem from "./CardEditItem";



export default function EditFolder({ folderId }) {

    const [folderForm, setFolderForm] = useState({ folderId, title: "", description: "" });
    const [cards, setCards] = useState([]);

    const handleOnChange = (e) => { setFolderForm({ ...folderForm, [e.target.name]: e.target.value }); }

    

    function submitEditFolder(e) {
        e.preventDefault();
        console.log(folderForm)
        updateFolder(folderForm).then(response =>{
             console.log(response)
             toast("Folder updated successfully.")
            }).catch(error => console.log(error));
    }



    useEffect(() => {
        console.log(folderId);

        getFolder(folderId).then(response => {
            setFolderForm({ ...folderForm, title: response.data.folder.title, description: response.data.folder.description })

        }).catch(error => console.log(error))

        getCards(folderId).then(response => {
            console.log(response);
            setCards(response.data.folderCards);
        }).catch(error => console.log(error));
    }, [])

    return <div className="mt-20 lg:p-16 xs:p-5">

        <h1 className="font-bold text-white text-3xl mb-6">Customize Your Folder</h1>
        {/* folder title and desc */}
        <form
            onSubmit={(e) => submitEditFolder(e)}
            className="">
            <div className="mb-6 grid grid-row grid-cols-2 ">
                {/* inputs div */}
                <div className="flex flex-col  gap-2 ">
                <label className="text-gray-400 font-bold">Title</label>
                    <input
                        onChange={(e) => handleOnChange(e)}
                        name="title"
                        value={folderForm.title}
                        className="font-bold text-white bg-transparent shadow  border-yellow-500 border-b-4 rounded  py-2 px-3  leading-tight focus:border-b-8 focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Folder Name" />
                    <br></br>
                    <label className="text-gray-400 font-semibold">Description</label>
                    <input
                        onChange={(e) => handleOnChange(e)}
                        name="description"
                        value={folderForm.description}
                        className="font-semibold text-white bg-transparent shadow  border-yellow-500 border-b-4 rounded  py-2 px-3  leading-tight focus:border-b-8 focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Folder description" />

                </div>



                <div className="flex items-start justify-end  p-2 ">
                    <button className="bg-yellow-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Apply
                    </button>
                </div>



            </div>
        </form>
        <hr className="border-yellow-500 mx-5"></hr>


        {/* card list!!!! */}
        <div className="flex flex-col gap-5 mt-10">

            {cards.map((card)=>{
                return <CardEditItem card={card} cardId={card._id} setCards={setCards} cards={cards}/>
            })}

        </div>

    </div>

}