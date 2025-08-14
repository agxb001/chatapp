import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
    return (
        <div className="flex p-8 sm:h-[450px] md:h-[550px] bg-gray-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border">
            <Sidebar />
            {/* <MessageContainer /> */}

        </div>
    )
}

export default Home
