import { useState } from "preact/hooks";

export default function RecordCard() {
    const [name, setName] = useState("");
    const [regNo, setRegNo] = useState("");
    const [send, setSend] = useState(false);
    const handleSend = () => {
        if(name == "" || regNo == "") return;
        setSend(true);

        fetch("/api/createRecord", {
            method: "PUT",
            body: JSON.stringify({
                name,regNo
            })
        })
    } 

    return !send ? <div class={`pb-3 text-center flex flex-col gap-2 items-center`}>
    <h1 className="italic text-[20px] text-blue-600">Get Your Results</h1>
    <h2 className="italic text-[12px]">Im trying to send Result Quickly</h2>
    <input placeholder="Name" onChange={(e) => setName(e.currentTarget.value)} value={name} type="text" className="w-50 text-[14px] italic border-1  caret-blue-600 border-blue-600 focus:blue focus:outline-none rounded-lg text-center"/>
    <input placeholder="Register No" onChange={(e) => setRegNo(e.currentTarget.value)} value={regNo} type="text" className="w-50 text-[14px] italic border-1 border-blue-600 focus:outline-none rounded-lg text-center"/> 
    <button onClick={() => handleSend()} className="text-[14px] rounded-lg w-20 text-white bg-blue-600">
            Send
            </button>
   </div>
   : <div class="text-center">Thanks For Sending</div>
}