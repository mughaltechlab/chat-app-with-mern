import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import useConversation from "../../zustand-store/useConversation"
import useGetConversation from "../../hooks/useGetConversation"
import toast from 'react-hot-toast'

const SearchInput = () => {

  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    console.log(search);

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()) );
    console.log('-----------------')
    console.log(conversation);
    console.log('-----------------')
    
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('No such user found!');
    
  }
  
  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        
        <input 
          className="input input-bordered text-gray-300 bg-violet-400 bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-45" placeholder="Search" 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type='submit' className="btn bg-violet-600 hover:bg-violet-800 border-none text-white"> <FaSearch /> </button>
    </form>
  )
}

export default SearchInput