import React, { useState } from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { adduser } from './Usereducer'

export default function Adduser() {
    
    const [name,setname] = useState('')
    const [email,setemail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const selector = useSelector(state=>state.abc)

    const handleclick = (e)=>{
            e.preventDefault()
            dispatch(adduser({id: selector[selector.length - 1].id+1,name,email}))
            navigate('/')
    }

  return (
    <div className='row justify-content-center text-start'>
        <div className='col-6'>
            <form className='container' onSubmit={handleclick}>
                <h4 className='mt-2 text-center'>Add User</h4>
                <div className='col-12'>
                    <label className='form-label'>ID</label>
                    <input disabled className='form-control'></input>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Name</label>
                    <input value={name}  onChange={(e)=>{setname(e.target.value)}} className='form-control'></input>
                </div>
                <div className='col-12'>
                    <label className='form-label'>Email</label>
                    <input value={email} onChange={(e)=>{setemail(e.target.value)}} className='form-control'></input>
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
