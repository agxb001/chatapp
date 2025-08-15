import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
    return (
        <div className="border-r w-full border-slate-500 px-4 flex flex-col">
            <SearchInput />
            <div className="divider px-2"></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar
