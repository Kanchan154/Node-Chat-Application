import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../Zustand/useConversation';
import UseGetConversation from '../../Hooks/UseGetConversation'
import toast from 'react-hot-toast';
const Searchbar = () => {
    const [search, setsearch] = useState('')
    const {setSelectedConversation} = useConversation()
    const {conversations} = UseGetConversation()

    const handleSearch = (e) => {
        e.preventDefault();
        if(!search) return

        if(search.length < 3){
            return toast.error('Search term must be at least 3 characters long')
        }

        const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

        if(conversation) {
            setSelectedConversation(conversation)
            setsearch('')
        }
        else toast.error("No user found!....")

    }

    return (
        <form className='flex items-center gap-2' onSubmit={handleSearch}>
            <label className="input input-bordered flex rounded-full items-center gap-2">
                <input
                    type="text"
                    className="grow"
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                    placeholder="Search" />
                <button >
                    <IoSearch className='w-6 h-6 outline-none' type='submit' />
                </button>
            </label>
        </form>
    )
}

export default Searchbar