import { useState } from "react"


export default function AddCard({ folderId, addCard }) {

    const [cardForm, setCardForm] = useState({ folderId, word: "", meaning: "" });
    const handleOnChange = (e) => { setCardForm({ ...cardForm, [e.target.name]: e.target.value }); }



    return <form
        onSubmit={(e) => { addCard(e, cardForm); setCardForm({ folderId, word: "", meaning: "" }) }}
        className="bg-blue-800 rounded p-5 ">
        <div className="flex flex-col lg:grid lg:grid-cols-5  lg:gap-5 gap-16">
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






            <button className="col-span-1 bg-yellow-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Add
            </button>




        </div>
    </form>
}