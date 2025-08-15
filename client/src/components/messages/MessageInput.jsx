import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
    return (
        <form className='px-2 '>
            <div className='w-full flex items-center '>
                <input type='text' className='outline-none text-sm rounded-lg block w-full p-3 bg-slate-900  text-white' placeholder='Send a message' />

                <button type='submit' className='btn btn-circle flex items-center pe-3 bg-indigo-500  cursor-pointer justify-center'> <BsSend className='w-6 h-6' /></button>

            </div>

        </form>
    )
}

export default MessageInput
