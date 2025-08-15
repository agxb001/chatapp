import { IoIosLogOut } from "react-icons/io";

const LogoutButton = () => {
    return (

        <div className="mt-auto border-t border-gray-100/30 flex items-center gap-2 p-2">
            <IoIosLogOut className="h-7 w-7 text-white cursor-pointer" />
            <span className="font-bold">Logout</span>
        </div>
    )
}

export default LogoutButton
