import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function SignIn() {
    const [pass,setPass] = useState('')
    const navigate = useNavigate()

    const enter=()=>{
        if(pass==12345) 
            navigate("/controlPanel")
        else alert("wrong password")
    }
  return (
    <div>
        <input type="text" placeholder='enter password' onChange={e => setPass(e.target.value)}/> <br />
        <button onClick={()=>enter()}>Sign In</button>
    </div>
  )
}
