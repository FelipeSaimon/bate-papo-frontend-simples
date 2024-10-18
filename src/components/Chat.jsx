import { SendHorizonalIcon } from "lucide-react";
import Mensagem from "./Mensagem";
import { useState, useRef, useEffect } from "react";

function Chat() {
    const [user, setUser] = useState("UserA")
    const [mensagem, setMensagem] = useState("")
    const [mensagens, setMensagens] = useState(JSON.parse(localStorage.getItem("mensagens")) || [])
    const messagesEndRef = useRef(null);

    function mensagemEnviar(e) {
        setMensagem(e.target.value)
    }


    function listarMensagens() {
        setMensagens([...mensagens, { texto: mensagem, userAtual: user }])
        setMensagem("")
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        localStorage.setItem("mensagens", JSON.stringify(mensagens))
        scrollToBottom();
    }, [mensagens]);


    return (
        <div className="bg-slate-950 w-screen h-screen relative ">
            <div className={`w-full h-5/6 mt-5 py-5 px-4 absolute overflow-y-auto space-y-3`}>
                <ul className="space-y-3">
                    {mensagens.map((mensagem, index) => {
                        return (
                            <li key={index}>
                                <Mensagem
                                    msg={mensagem.texto}
                                    user={mensagem.userAtual}
                                    isUserAtual={user}
                                />
                            </li>
                        )
                    })}
                    <div ref={messagesEndRef} />
                </ul>
            </div>
            <div className="w-[700px] h-10 absolute bottom-0 left-3.5 mb-4 bg-white flex justify-center rounded-lg">
                <input type="text" placeholder="Mensagem..." className="w-full rounded-lg px-3 outline-none"
                    value={mensagem}
                    onChange={e => mensagemEnviar(e)}
                />
                <button onClick={(e) => { listarMensagens() }} className="text-slate-900 pr-3"><SendHorizonalIcon /></button>
            </div>

            <button className="bg-slate-200 rounded-md p-2 font-semibold absolute bottom-4 right-3" onClick={() => setUser(user === 'UserA' ? 'UserB' : 'UserA')}>
                Trocar Usuário (Atual: {user})
            </button>
        </div>
    )
}

export default Chat;