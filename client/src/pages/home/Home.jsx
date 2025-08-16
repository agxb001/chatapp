import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
    return (
        <div className="flex justify-between gap-8 p-6 min-h-[800px] min-w-[1200px] bg-gray-0 rounded-md bg-clip-padding backdrop-blur-lg bg-opacity-10 border">
            <Sidebar />
            <MessageContainer />

        </div>
    )
}

export default Home
