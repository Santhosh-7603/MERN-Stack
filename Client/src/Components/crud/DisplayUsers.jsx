import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DisplayUsers = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const handleDelete =  (id) => {
        axios.delete(`http://localhost:3000/deleteUser/${id}`)
        .then(res=>{
            setData((prev)=> prev.filter((e)=>e._id !== id))
            console.log(res, "user Deleted")
        })
        .catch((err)=>console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3000/getUser')
            .then(res => {setData(res.data)})
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        navigate(`/updateUser/${id}`)
    }


    const handleAddData = () => {
        navigate('/createUser')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
            <button
                onClick={handleAddData}
                className="mb-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded shadow hover:scale-105 transition"
            >
                + Add Data
            </button>
            <div className="w-full max-w-3xl bg-white rounded shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 text-center">User List</h2>
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-2">S. No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(data) && data.length > 0 ? (
                            data.map((user, idx) => (
                                <tr key={user._id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-2">{idx + 1}</td>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">{user.phone}</td>
                                    <td className="px-4 py-2 flex gap-2">
                                        <button
                                            onClick={() => handleEdit(user._id)}
                                            className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-4 text-gray-500">No users found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DisplayUsers