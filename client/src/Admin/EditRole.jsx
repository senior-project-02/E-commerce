import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

const EdditRole=()=>{

const [role,setRole]=useState('')
const navigate=useNavigate()
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const idParam = queryParams.get('id')
console.log(idParam)
const updateRole=()=>{
    axios.put(`http://localhost:8000/admin/EditRole/${idParam}`,{
        role:role
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{console.log(err)})
}
return(
    <div className="bg-white p-4 rounded shadow">
    <h2 className="text-lg font-semibold mb-4">Edit User Role</h2>
    <form >
      <div className="mb-4">
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
          Role:
        </label>
        <select
          id="role"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={role}
          onChange={(e)=>{setRole(e.target.value)}}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="Seller">Seller</option>

        </select>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={()=>{updateRole(),navigate('/Admin/All'),window.location.reload()}}>
          Save
        </button>
      </div>
    </form>
  </div>

)

}
export default EdditRole