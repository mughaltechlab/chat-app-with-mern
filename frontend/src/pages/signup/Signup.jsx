import React, {useState} from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup';
import Loader from '../../components/Loader';

function SignUp() {

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const [loading, signup] = useSignup();

    const handleGenderBtn = (gender)=>{
        setInputs({...inputs, gender});
    }
      
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await signup(inputs);
    };
    
  return (
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
        <div className="
            w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
        ">
            {/* heading */}
            <h1 className="text-3xl font-semibold text-gray-300 text-center ">
                SignUp&nbsp;
                <span className="text-purple-400">ChatApp</span>
            </h1>

            {/* form */}
            <form onSubmit={handleSubmit}>
                {/* Full name */}
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-400 label-text">Full name</span>
                    </label>
                    <input type="text" placeholder='Enter Full name' className="w-full input input-bordered h-10 " 
                        value={inputs.fullName}
                        onChange={(e)=>{setInputs({...inputs, fullName: e.target.value})}}
                    />
                </div>
                {/* Username */}
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-400 label-text">Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10 " 
                        value={inputs.userName}
                        onChange={(e)=>{setInputs({...inputs, userName: e.target.value})}}
                    />
                </div>
                {/* password */}
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-400 label-text">Password</span>
                    </label>
                    <input type="password" placeholder='Enter password' className="w-full input input-bordered h-10 " 
                        value={inputs.password}
                        onChange={(e)=>{setInputs({...inputs, password: e.target.value})}}
                    />
                </div>
                {/* confirm password */}
                <div>
                    <label  className="label p-2">
                        <span className="text-base text-gray-400 label-text">Confirm password</span>
                    </label>
                    <input type="password" placeholder='Confirm password' className="w-full input input-bordered h-10 " 
                        value={inputs.confirmPassword}
                        onChange={(e)=>{setInputs({...inputs, confirmPassword: e.target.value})}}
                    />
                </div>
                {/* gender checkbox */}
                <GenderCheckbox onChangeRadioBtn={handleGenderBtn} selectedGender={inputs.gender} />
                {/* link */}
                <Link to="/login" className="text-sm text-gray-400 transition-all duration-150 hover:underline hover:text-violet-400 mt-2 inline-block ">
                    Already have an account?
                </Link>
                {/* btn */}
                <div>
                    <button disabled = {loading === true ? true : false} className="btn btn-sm btn-block mt-2 bg-violet-500 text-white hover:bg-violet-800 border-violet-500 ">
                        {
                            loading ? <Loader /> : "Sign up"
                        }
                    </button>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default SignUp



// :: STARTER CODE FOR THIS FILE

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// function SignUp() {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//         <div className="
//             w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0
//         ">
//             {/* heading */}
//             <h1 className="text-3xl font-semibold text-gray-300 text-center ">
//                 SignUp&nbsp;
//                 <span className="text-purple-400">ChatApp</span>
//             </h1>

//             {/* form */}
//             <form action="">
//                 {/* Full name */}
//                 <div>
//                     <label  className="label p-2">
//                         <span className="text-base text-gray-400 label-text">Full name</span>
//                     </label>
//                     <input type="text" placeholder='Enter Full name' className="w-full input input-bordered h-10 " />
//                 </div>
//                 {/* Username */}
//                 <div>
//                     <label  className="label p-2">
//                         <span className="text-base text-gray-400 label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className="w-full input input-bordered h-10 " />
//                 </div>
//                 {/* password */}
//                 <div>
//                     <label  className="label p-2">
//                         <span className="text-base text-gray-400 label-text">Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter password' className="w-full input input-bordered h-10 " />
//                 </div>
//                 {/* confirm password */}
//                 <div>
//                     <label  className="label p-2">
//                         <span className="text-base text-gray-400 label-text">Confirm password</span>
//                     </label>
//                     <input type="password" placeholder='Confirm password' className="w-full input input-bordered h-10 " />
//                 </div>
//                 {/* gender checkbox */}
//                 <GenderCheckbox />
//                 {/* link */}
//                 <a href="" className="text-sm text-gray-400 transition-all duration-150 hover:underline hover:text-violet-400 mt-2 inline-block ">
//                     Already have an account?
//                 </a>
//                 {/* btn */}
//                 <div>
//                     <button className="btn btn-sm btn-block mt-2 bg-violet-500 text-white hover:bg-violet-800 border-violet-500 ">
//                       Sign up
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp