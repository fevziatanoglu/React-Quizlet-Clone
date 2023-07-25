import { useEffect, useState } from "react"
import { getCards, getFolder, removeCard, updateFolder, addCard } from "../../axios";
import { toast } from "react-toastify";
import CardEditItem from "../card/CardEditItem";
import Modal from "../Modal";
import AddCard from "../card/AddCard";
import { AiOutlinePlus } from "react-icons/ai"


export default function EditFolder({ folderId }) {


    const [cards, setCards] = useState([]);

    // delete function
    function deleteCardSubmit(e, cardId) {
        removeCard(cardId).then(response => {
            e.preventDefault();
            console.log(response);
            const updatedCards = [...cards].filter((card) => { return card._id !== cardId });
            setCards(updatedCards);
            console.log(updatedCards);
        })
    }

    // add function
    function addCardSubmit(e, formData) {
        e.preventDefault();
        addCard(formData).then(response => {
            console.log(response);
            let newCard = response.data.card;
            setCards([...cards, newCard]);
            console.log(cards);
            toast.success("Card added successfully")
        }).catch(error => console.log(error));
    }

    const [isShowAddCard, setIsShowAddCard] = useState(false);

    const [folderForm, setFolderForm] = useState({ folderId, title: "", description: "" });
    const handleOnChange = (e) => { setFolderForm({ ...folderForm, [e.target.name]: e.target.value }); }



    // folder title and description change submit
    function submitEditFolder(e) {
        e.preventDefault();
        updateFolder(folderForm).then(response => {
            console.log(response)
            toast.success("Folder updated successfully.")
        }).catch(error => console.log(error));
    }


    // get datas from server
    useEffect(() => {
        getFolder(folderId).then(response => {
            setFolderForm({ ...folderForm, title: response.data.folder.title, description: response.data.folder.description })
        }).catch(error => console.log(error))

        getCards(folderId).then(response => {
            console.log(response);
            setCards(response.data.folderCards)
        }).catch(error => console.log(error));
    }, [])


    return <div className="lg:mt-10 xs:mt-32 lg:p-16 p-5">

        <h1 className="font-bold text-white text-3xl mb-6">Customize Your Folder</h1>
        {/* change folder name form */}
        <form
            onSubmit={(e) => submitEditFolder(e)}
            className="">
            <div className="mb-6 flex flex-col md:flex-row  gap-5 ">
                <div className="flex flex-col gap-2 md:w-2/3">
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

                <div className="flex items-start justify-end  md:w-1/3 p-2 ">
                    <button className="bg-yellow-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Apply
                    </button>
                </div>

            </div>
        </form>
        <hr className="border-yellow-500 mx-5"></hr>


        {/* card list!!!! */}
        <div className="flex flex-col gap-5 mt-10">

            {/* OPEN ADD CARD MODAL BUTTON */}
            <button
                onClick={() => setIsShowAddCard(true)}
                className="bg-blue-800 rounded  text-white text-3xl  border-4 border-dashed border-white font-bold flex item-center justify-center p-10 gap-2 hover:bg-yellow-500 hover:text-blue-700">
                ADD CARD <AiOutlinePlus size={40} className="bg-white rounded-2xl text-blue-700" />
            </button>

            {/* CARDS */}
            {cards.map((card) => {
        
                return  <CardEditItem key={card._id} card={card} deleteCard={deleteCardSubmit} />
                
            })}

        </div>

        {/* ADD CARD MODAL */}
        <Modal isOpen={isShowAddCard} onClose={() => setIsShowAddCard(false)} title={"Let's Add a Card"}>
            <AddCard folderId={folderId} addCard={addCardSubmit} />
        </Modal>



    </div>

}