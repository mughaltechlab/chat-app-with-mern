import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-violet-800 rounded p-2 py-1 transition-all duration-150 cursor-pointer '>
            {/* avatar */}
            <div className={`avatar online `}>
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between ">
                    {/* name */}
                    <p className="text-gray-300">Emily Matty</p>
                    {/* emoji */}
                    <span className="text-xl">😴</span>
                </div>
            </div>
        </div>
        {/* divider */}
        <div className="divider my-0 py-0 h-1 divider-neutral"></div>
    </>
  )
}

export default Conversation