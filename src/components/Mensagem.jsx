import  Image  from "../assets/avatar.png";

function Mensagem({msg, user}) {
    return (
        <div className={`flex gap-3 items-center ${user == 'UserA' ? "justify-start" : "justify-end"}`}>
            <img className="rounded-full" src={Image} alt="" width={60} />
            <div className="w-96 bg-slate-100 py-2 px-4 text-justify rounded-md shadow-sm  shadow-white">
                <h3 className="text-xl font-bold text-slate-900">{user}</h3>
                <hr />
                <p className="pt-2">{msg}</p>
            </div>
        </div>
    )
}

export default Mensagem;
