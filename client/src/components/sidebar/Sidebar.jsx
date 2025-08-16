import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
    return (
        <div className="min-w-[300px] border-r w-full border-slate-500 px-4 flex flex-col">
            <SearchInput />
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar
