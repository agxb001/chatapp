import { IoIosLogOut } from "react-icons/io";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout()

    return (
        <div className="mt-auto btn rounded items-center gap-2 p-2">
            {
                !loading ?
                    (
                        <div className="flex items-center gap-2">
                            <IoIosLogOut className="h-6 w-6 text-white cursor-pointer" onClick={logout} />
                            <span className="">Logout</span>
                        </div>
                    ) :
                    (<span className="loading loading-spinner"></span>)
            }

        </div>
    )
}

export default LogoutButton
