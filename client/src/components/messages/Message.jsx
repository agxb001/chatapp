
const Message = () => {
    return (
        <div className='chat chat-end py-5'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src='./image.png' alt='user dp' />
                </div>
            </div>

            <div className='chat-bubble rounded-full text-white bg-indigo-500'>Hi! k cha khabar?</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:34</div>

        </div>
    )
}

export default Message
