import { useState } from "react";
import { TbSend } from "react-icons/tb";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className='px-2' onSubmit={handleSubmit}>
            <div className='w-full flex gap-1 items-center'>
                <input
                    type='text'
                    className=' text-sm rounded-lg block w-full p-3  bg-slate-900  text-white outline-0'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='flex btn btn-circle  bg-indigo-500 cursor-pointer'>
                    {loading ? <div className='loading loading-spinner'></div> : <TbSend className="w-5 h-5 items-center justify-center" />}
                </button>
            </div>
        </form>
    );
};
export default MessageInput;