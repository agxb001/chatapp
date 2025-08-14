import { IoSearchOutline } from "react-icons/io5";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search..." className="input bg-slate-900 rounded-full" />
            <button type="submit" className="btn btn-circle bg-indigo-500 text-white">
                <IoSearchOutline className="w-6 h-6" />
            </button>
        </form>
    )
}

export default SearchInput
