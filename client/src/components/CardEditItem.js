import { useState } from "react"
import { removeCard, updateCard } from "../axios";



export default function CardEditItem({ card , cardId, setCards , cards }) {

    const [cardForm, setCardForm] = useState({ cardId: cardId, word: card.word, meaning: card.meaning })
    const handleOnChange = (e) => { setCardForm({ ...cardForm, [e.target.name]: e.target.value }); }

    const submitEditCard = (e) => {
        e.preventDefault();
        updateCard(cardForm).then(response => console.log(response)).catch(err => console.log(err));
    }

    const deleteCard = () => {
        console.log(cardId)
        console.log(cardForm)

        
        // const updatedCardsList = cards.filter(card => card._id !== cardId);
        // setCards(updatedCardsList);

        removeCard(cardId).then(response => console.log(response)).catch(err => console.log(err));
        // sildikten sonra editFolder'ın içindeki cards'tan sil 
    }

    return <form
        onSubmit={(e) => submitEditCard(e)}
        className="bg-blue-800 rounded p-5 ">
            {cardId}
        <div className="mb-6 grid grid-cols-6  gap-5">
            {/* inputs div */}
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






            <button className="bg-yellow-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
                Apply
            </button>

            <button
                onClick={(e)=> deleteCard()}
                type="button"
            className="bg-red-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline" >
                Delete
            </button>


        </div>
    </form>




}