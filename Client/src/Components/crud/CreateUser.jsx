import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/createUser',data)
        .then(res=> navigate('/'))
        .catch(err=>console.log(err))
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setData((prev)=>({...prev,[name]: value}))
    }


    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit} >
        <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={data.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
          name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
          <input
          name="phone"
            type="tel"
            value={data.phone}
            onChange={handleChange}
            id="phone"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={data.password}
            onChange={handleChange}
            id="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create User
        </button>
      </form>
    </div>
  )
}

export default CreateUser