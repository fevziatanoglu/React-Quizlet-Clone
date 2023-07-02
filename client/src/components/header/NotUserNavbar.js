import { useState } from "react"
import Modal from "../Modal";
import Login from "../auth/Login";
import Register from "../auth/Register";


export default function NotUserNavbar() {

    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowRegister, setIsShowRegister] = useState(false);


    return (
        <>
            <nav className="fixed w-full top-0 bg-white  w-45">
                <div className="flex h-16 items-center justify-center gap-5 lg:justify-between lg:px-5">

                    <div className="flex items-center">
                        <a className="font-bold text-3xl text-blue-600 hover:cursor-pointer" href="">Quizlet</a>

                        <div className="ml-10 flex gap-5 text-sm font-semibold ">
                            <a className="hover:cursor-pointer p-4  border-white border-b-8 hover:border-blue-500 hover:border-b-8" href="/home">Home</a>
                            <a className="hover:cursor-pointer p-4  border-white border-b-8 hover:border-blue-500 hover:border-b-8" href="https://github.com/fevziatanoglu/React-Quizlet-Clone">Source Codes</a>
                        </div>

                    </div>

                    <div className="flex gap-3 text-sm font-semibold">
                        <button onClick={(e) => { setIsShowLogin(true) }} className="text-dark bg-gray-100 py-2.5 px-4 rounded-lg hover:bg-gray-300">Log in</button>
                        <button onClick={(e) => { setIsShowRegister(true) }} className="text-dark bg-yellow-400 py-2.5 px-4 rounded-lg hover:bg-yellow-300">Sign Up</button>

                    </div>

                </div>
            </nav>

            {/* login modal */}
            <Modal isOpen={isShowLogin} onClose={() => setIsShowLogin(false)} title={"Let's Sign In Your Account"} >
                <Login toggle={()=> {setIsShowLogin(false); setIsShowRegister(true)}} />
            </Modal>

            <Modal isOpen={isShowRegister} onClose={() => setIsShowRegister(false)} title={"Let's Create An Account"} >
                <Register toggle={()=> {setIsShowLogin(true); setIsShowRegister(false)}} />
            </Modal>
        </>
    )
}