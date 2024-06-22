// import { Iform } from '@/Inerface/form'
// import React, { useState } from 'react'

// export default function formDisplay() {
//     const [form,setForm]=useState<Iform>({
//         firstName:'',
//         lastName:'',
//         isActive:false,
//     });
//     const handleChange=(e:React.ChangeEvent<HTMLInputElement>): void=>{
//         setForm({...form,[e.target.name]: e.target.type =="checkbox"? e.target.checked: e.target.value})
//     }
//     const handleForm =(e:React.ChangeEvent<HTMLFormElement>): void=>{
//         e.preventDefault()
//         console.log(form)
//     }
//   return (
//     <form onSubmit={handleForm}>
//         <input type="text" name='firstName' onChange={handleChange} />
//         <input type="text" name='lastName' onChange={handleChange}/>
//         <input type="checkbox" name='isActive' onChange={handleChange} />
//         <input type="submit" value="submit" />
//     </form>
//   )
//     }
//***********************************Practice******************************

import { Iform } from '@/Inerface/form'
import React, { useState } from 'react'

export default function formDisplay() {
    const[form,setForm]=useState<Iform>({
        firstName:'',
        lastName:'',
        isActive:false,
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setForm({...form,[e.target.name]:e.target.type == 'checkbox'? e.target.checked: e.target.value})
    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>):void=>{
        e.preventDefault()
        console.log(form)
    }
  return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='firstName' onChange={handleChange} />
            <input type="text" name='lastName' onChange={handleChange}/>
            <input type="checkbox" name='isActive' onChange={handleChange} />
            <input type="submit" value="submit" />
        </form>
  )
}



