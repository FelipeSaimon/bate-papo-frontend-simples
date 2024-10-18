import React from "react";
import Image from '../assets/avatar.png'
function Chats() {
    return (
        <div className="w-1/4 h-screen bg-slate-900 p-2 space-y-2">
            <h2 className="font-semibold text-white text-2xl">TalkMe</h2>
            <div className="w-full h-16 bg-slate-700 p-2 flex items-center gap-2 rounded-md ">
                <img className="rounded-full" src={Image} alt="" width={40} />
                <div>
                    <h3 className="text-white text-xl font-semibold">Username</h3>
                    <p className="text-white">Ultima mensagem</p>
                </div>
            </div>

            <div className="w-full h-16 bg-slate-700 p-2 flex items-center gap-2 rounded-md">
                <img className="rounded-full" src={Image} alt="" width={40} />
                <div>
                    <h3 className="text-white text-xl font-semibold">Username 2</h3>
                    <p className="text-white">Ultima mensagem</p>
                </div>
            </div>
        </div>
    )
}

export default Chats;