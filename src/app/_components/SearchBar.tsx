import Link from "next/link";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

function SearchBar() {

    return (
        <div className='justify-center items-center'>
            <form className="flex items-center max-w-lg mx-auto"> {/* Increased max width */}
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-white border text-gray-950 shadow-lg text-lg rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3"
                        placeholder="Club Search..."
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
