import React, { useState } from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { edituser } from './Usereducer'

export default function EditUser() {

    const {userid} = useParams()
    
    const selector = useSelector(state=>state.abc)

    const existinguser = selector.filter((user)=>(
        user.id == userid
    ))
    

    const {name,email} = existinguser[0]

    const [uname,setuname] = useState(name)
    const [uemail,setuemail] = useState(email)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleclick = (e)=>{
        e.preventDefault()
        dispatch (edituser({id:userid,name:uname,email:uemail}))
        navigate('/')
    }

  return (
    <div className='row justify-content-center text-start'>
        <div className='col-6'>
            <form className='container' onSubmit={handleclick}>
                <h4 className='mt-2 text-center'>Edit User</h4>
                <div className='col-12'>
                    <label className='form-label'>ID</label>
                    <input value={userid} disabled className='form-control'></input>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Name</label>
                    <input value={uname}  onChange={(e)=>{setuname(e.target.value)}} className='form-control'></input>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Email</label>
                    <input value={uemail} onChange={(e)=>{setuemail(e.target.value)}} className='form-control'></input>
                </div>
                <div className='col-12'>
                    <button className='btn btn-info m-2'>Save</button>
                    <Link to='/' className='btn btn-warning m-2'>Back</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
