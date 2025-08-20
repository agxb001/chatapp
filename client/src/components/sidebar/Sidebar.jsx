import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ onSelectConversation }) => {
    return (
        <div className="max-w-[468px] border-slate-500 px-2 flex flex-col">
            <SearchInput />
            <Conversations onSelectConversation={onSelectConversation} />
            <LogoutButton />
        </div>
    );
};

export default Sidebar;
