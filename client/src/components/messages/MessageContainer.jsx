import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TbMessages } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { authUser } = useAuthContext();


    useEffect(() => {
        // cleanup function (unmounts)
        return () => setSelectedConversation(null);
    }, [setSelectedConversation]);

    return (
        <div className='sm:min-w-[450px] md:min-w-[760px] flex flex-col'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className="flex items-center justify-between bg-slate-900 px-4 py-2 mb-2 rounded">
                        <div>
                            <span className='label-text'>To:</span>{" "}
                            <span className='text-gray-300 font-bold'>{selectedConversation.fullname}</span>
                        </div>

                        {/* current username */}
                        <div>
                            <span className="label-text ">From:</span>
                            <span className='text-gray-300 font-bold'> {authUser.fullname}</span>
                        </div>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
};
export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullname} ❄</p>
                <p>Select a chat to start messaging</p>
                <TbMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
