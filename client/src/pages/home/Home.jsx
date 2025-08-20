import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);

    return (
        <div className="w-full max-w-[1200px] flex justify-between gap-4 px-2 py-6 h-[800px] bg-gray-0 rounded-md bg-clip-padding backdrop-blur-xs border relative">
            <Sidebar />
            <MessageContainer />


        </div>
    );
};

export default Home;
