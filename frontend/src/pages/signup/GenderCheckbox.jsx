import React from 'react'

function GenderCheckbox() {
  return (
    <div className="flex">
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-gray-400">Male</span>
                <input type="radio" name="gender" className="radio checked:bg-violet-500 bg-white size-4" defaultChecked />
            </label>
        </div>
        <div className="form-control">
            <label className={`label gap-2 cursor-pointer`}>
                <span className="label-text text-gray-400">Female</span>
                <input type="radio" name="gender" className="radio checked:bg-violet-500 bg-white size-4" defaultChecked />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox




// :: STARTER CODE FOR THIS FILE
// import React from 'react'

// function GenderCheckbox() {
//   return (
//     <div className="flex">
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className="label-text text-gray-400">Male</span>
//                 <input type="radio" name="gender" className="radio checked:bg-violet-500 bg-white size-4" defaultChecked />
//             </label>
//         </div>
//         <div className="form-control">
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className="label-text text-gray-400">Female</span>
//                 <input type="radio" name="gender" className="radio checked:bg-violet-500 bg-white size-4" defaultChecked />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox