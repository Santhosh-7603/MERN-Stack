import { useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import {Formvalidation, error} from './Formvalidation.js'



const CreateUser = () => {
  const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const [error, setError] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })


  function Formvalidation(name, value){
        if (name === "name"){ const validationResult = isValidName(value); setError((prev) =>({...prev,[name] : validationResult})) }
        if (name === "email"){ const validationResult = isValidEmail(value); setError((prev) =>({...prev,[name] : validationResult})) }
        if (name === "phone"){ const validationResult = isValidPhone(value); setError((prev) =>({...prev,[name] : validationResult})) }
        if (name === "password"){ const validationResult = isValidPassword(value); setError((prev) =>({...prev,[name] : validationResult})) }
    }

    function isValidName(value) {
    if (/[^a-zA-Z\s]/.test(value)) return "Only Alphabets are allowed";
    if (value.length < 3) return "Atleast 3 Characters required";
    if (value.length > 25) return "Name is too Long";
    if (/^\s+$/.test(value)) return "Name cannot be only spaces";
    if (/\s{2,}/.test(value)) return "Name cannot contain multiple spaces";
    if (/^\s|\s$/.test(value)) return "Name cannot start or end with space";
    return "";
  }
  function isValidEmail(value) {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Enter Valid Email";
    if (value.length < 8) return 
    return "";
  }
  function isValidPassword(value) {
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._])[A-Za-z\d@$!%*?&._]{8,}$/.test(
        value
      )
    )
      return "Weak Password";
    return "";
  }
  function isValidPhone(value) {
    if (/[^0-9]/.test(value)) return "Only Digits are Allowed";
    if (value.length > 0 && !/^[6-9]/.test(value))
      return "Phone number must start with 6-9";
    if (value.length > 10 || value.length < 10)
      return "Phone number must be 10 digits";
    if (/^([0-9])\1{9}$/.test(value))
      return "Phone number cannot have all digits same";
    return "";
  }



    const handleSubmit = (e) =>{
        e.preventDefault()
        const hasError = Object.values(error).find((e)=>e.length !== 0)
        if (!hasError){
          axios.post('https://backend-mu-two-98.vercel.app/createUser',data)
          .then(()=>navigate('/'))
          .catch(err=>console.log(err))
        }
        else{
          console.log('check the Errors First')
        }
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        Formvalidation(name,value)
        setData((prev)=>({...prev,[name]: value}))
    }


    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">

      <form className="relative bg-white/80 p-8 rounded-2xl shadow-xl w-full max-w-md" onSubmit={handleSubmit} >
      <div
      onClick={()=>navigate('/')} 
      className="Backbtn text-white absolute top-0 left-0 bg-blue-600 px-5 text-lg py-1 cursor-pointer rounded-2xl rounded-bl-none rounded-tr-none capitalize ">Back</div>
        <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
        <div className=" min-h-[100px]">
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
          <span className="text-sm text-red-600 p-1">{error.name}</span>
        </div>
        <div className="min-h-[100px]">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
          name="email"
            type="text"
            value={data.email}
            onChange={handleChange}
            id="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <span className="text-sm text-red-600 p-1">{error.email}</span>
        </div>
        <div className="min-h-[100px]">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
          <input
          name="phone"
            type="text"
            value={data.phone}
            onChange={handleChange}
            id="phone"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number"
          />
          <span className="text-sm text-red-600 p-1">{error.phone}</span>
        </div>
        <div className="min-h-[100px] mb-3">
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
          <span className="text-sm text-red-600 p-1">{error.password}</span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateUser