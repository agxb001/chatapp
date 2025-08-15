import React from 'react'
import { TbMessages } from "react-icons/tb";
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
    const noChatSelected = true;

    return (
        <div className='md:min-w-[600px] flex flex-col'>

            {noChatSelected ? <NoChatSelected /> : (
                <>
                    {/* Header */}
                    <div className='bg-slate-900 rounded-lg px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>
                        <span className='font-bold ps-1'>John Doe</span>
                    </div>
                    <Messages />
                    <MessageInput />

                </>
            )}


        </div>
    )
}

export default MessageContainer;


const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {"John Doe"}</p>
                <p>Select a chat to start messaging</p>
                <TbMessages className='text-3xl md:text-6xl text-center' />

            </div>

        </div>
    )
}
