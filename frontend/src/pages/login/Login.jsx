import React from 'react'

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
        <div className="
            w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
        ">
            {/* heading */}
            <h1 className="text-3xl font-semibold text-gray-300 text-center ">
                Login&nbsp;
                <span className="text-purple-400">ChatApp</span>
            </h1>

            {/* form */}
            <form action="">
                {/* username */}
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-400 label-text">Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className="w-full input input-bordered h-10 " />
                </div>
                {/* password */}
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-400 label-text">Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className="w-full input input-bordered h-10 " />
                </div>
                {/* link */}
                <a href="" className="text-sm text-gray-400 transition-all duration-150 hover:underline hover:text-violet-400 mt-2 inline-block ">
                    Don't have an account?
                </a>
                {/* btn */}
                <div>
                    <button className="btn btn-sm btn-block mt-2 bg-violet-500 text-white hover:bg-violet-800 border-violet-500 ">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login




// :: STARTER CODE FOR THIS FILE ::

// import React from 'react'

// function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//         <div className="
//             w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
//         ">
//             {/* heading */}
//             <h1 className="text-3xl font-semibold text-gray-300 text-center ">
//                 Login&nbsp;
//                 <span className="text-purple-400">ChatApp</span>
//             </h1>

//             {/* form */}
//             <form action="">
//                 {/* username */}
//                 <div>
//                     <label  className="label p-2">
//                         <span className="text-base text-gray-400 label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter username' className="w-full input input-bordered h-10 " />
//                 </div>
//                 {/* password */}
//                 <div>
//                     <label  className="label p-2">
//                         <span className="text-base text-gray-400 label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter password' className="w-full input input-bordered h-10 " />
//                 </div>
//                 {/* link */}
//                 <a href="" className="text-sm text-gray-400 transition-all duration-150 hover:underline hover:text-violet-400 mt-2 inline-block ">
//                     Don't have an account?
//                 </a>
//                 {/* btn */}
//                 <div>
//                     <button className="btn btn-sm btn-block mt-2 bg-violet-500 text-white hover:bg-violet-800 border-violet-500 ">Login</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login