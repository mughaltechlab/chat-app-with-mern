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
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-200 label-text">Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className="w-full input input-bordered h-10 " />
                </div>
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-200 label-text">Username</span>
                    </label>
                    <input type="text" placeholder='Enter username' className="w-full input input-bordered h-10 " />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login