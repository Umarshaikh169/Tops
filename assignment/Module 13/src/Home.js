import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteuser } from './Usereducer'

export default function Home() {

    const [search,setsearch]= useState("")
    const selector = useSelector(state=>state.abc)

    const dispatch = useDispatch()

    const Loaddelete = (usid)=>{
        dispatch(deleteuser({id:usid}))
    }    

  return (
    <div className='container'>
        <div>
            <h4 className='mt-2'>Redux Crud</h4>
            <Link to='/AddUser' className='btn btn-warning my-2'>Add Data</Link>
            <div className='form-group  col-md-4 '>
            <input className='form-control rounded-0 py-2' value={search} placeholder='Search' onChange={(e)=>{setsearch(e.target.value)}}></input>
            </div>
            
        </div>

        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>

            <tbody>
            {selector
    .filter((item) => {
        const searchLowercase = search.toLowerCase();
        return searchLowercase === ''  ? item : item.name && item.name.toLowerCase().startsWith(searchLowercase);
    })
    .map((item) => (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <Link to={`/EditUser/${item.id}`} className='btn btn-primary me-2'>Edit</Link>
                <button onClick={() => { Loaddelete(item.id) }} className='btn btn-danger me-2'>Delete</button>
            </td>
        </tr>
    ))}


            </tbody>
        </table>
    </div>
  )
}
