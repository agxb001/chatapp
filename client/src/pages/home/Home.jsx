import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
    return (
        <div className="flex justify-between w-5xl gap-8 p-6 sm:h-[800px] bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border">
            <Sidebar />
            <MessageContainer />

        </div>
    )
}

export default Home
