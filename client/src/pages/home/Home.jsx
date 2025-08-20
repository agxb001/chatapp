import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    const [selectedConversation, setSelectedConversation] = useState(null);

    return (
        <div className="flex justify-between gap-4 px-2 py-6 min-h-[700px] sm:min-w-[468px] bg-gray-0 rounded-md bg-clip-padding backdrop-blur-xs border relative">
            {/* Pass down setter to Sidebar */}
            <Sidebar onSelectConversation={setSelectedConversation} />

            {/* Small screens: show only when conversation is selected */}
            <div className="flex-1 hidden sm:flex">
                <MessageContainer conversation={selectedConversation} />
            </div>

            {/* Mobile view: full screen MessageContainer if selected */}
            {selectedConversation && (
                <div className="sm:hidden absolute inset-0 bg-white z-40">
                    <MessageContainer conversation={selectedConversation} onBack={() => setSelectedConversation(null)} />
                </div>
            )}
        </div>
    );
};

export default Home;
