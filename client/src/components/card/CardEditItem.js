import { useState } from "react"
import { removeCard, updateCard } from "../../axios";
import { AiFillDelete, AiOutlineCheck } from "react-icons/ai";



export default function CardEditItem({ card , deleteCard }) {

    const [cardForm, setCardForm] = useState({ cardId: card._id, word: card.word, meaning: card.meaning })
    const handleOnChange = (e) => { setCardForm({ ...cardForm, [e.target.name]: e.target.value }); }

    const submitEditCard = (e) => {
        e.preventDefault();
        updateCard(cardForm).then(response => console.log(response)).catch(err => console.log(err));
    }

   

    return <form
        onSubmit={(e) =>submitEditCard(e)}
        className="bg-blue-800 rounded p-3 h-32 flex items-center justify-between">
        <div className="mb-6 grid grid-cols-6 w-full gap-5">
 
            <input
                onChange={(e) => handleOnChange(e)}
                name="word"
                value={cardForm.word}
                className="col-span-2 font-bold text-white bg-transparent shadow  border-yellow-500 border-b-4 rounded  py-2 px-3  leading-tight focus:border-b-8 focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Word" />
            <input
                onChange={(e) => handleOnChange(e)}
                name="meaning"
                value={cardForm.meaning}
                className=" col-span-2 font-semibold text-white bg-transparent shadow  border-yellow-500 border-b-4 rounded  py-2 px-3  leading-tight focus:border-b-8 focus:outline-none focus:shadow-outline" id="desc" type="text" placeholder="Meaning" />




            <button className="bg-yellow-500 hover:bg-blue-700 text-white md:p-3 col-span-1 text-xl font-bold flex justify-center items-center rounded-xl  focus:outline-none focus:shadow-outline" type="submit">
                <AiOutlineCheck size={35}/>
            </button>

            <button
                onClick={(e) => deleteCard(e , card._id)}
                type="button"
                className="bg-red-500 hover:bg-blue-700 text-white md:p-3 col-span-1 text-xl font-bold flex justify-center items-center rounded-xl  focus:outline-none focus:shadow-outline" >
                <AiFillDelete size={35}/>
            </button>


        </div>
    </form>




}