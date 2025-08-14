import React from 'react'
import Messages from './Messages'

const MessageContainer = () => {
    return (
        <div className='md:min-w-[600px] flex flex-col'>
            <>
                {/* Header */}
                <div className='bg-slate-900 rounded-lg px-4 py-2 mb-2'>
                    <span className='label-text'>To:</span>
                    <span className='font-bold ps-1'>John Doe</span>
                </div>
                <Messages />

            </>

        </div>
    )
}

export default MessageContainer
