import React from 'react'
import {FaSearch} from 'react-icons/fa'

const SearchInput = () => {
  return (
    <form action="" className='flex items-center gap-2'>
        
        <input className="input input-bordered text-gray-300 bg-violet-400 bg-clip-padding backdrop-filter backdrop-blur-[2px] bg-opacity-45" placeholder="Search" />
        <button type='submit' className="btn bg-violet-600 hover:bg-violet-800 border-none text-white"> <FaSearch /> </button>
    </form>
  )
}

export default SearchInput