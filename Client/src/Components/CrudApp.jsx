import CreateUser from './crud/CreateUser'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayUsers from './crud/DisplayUsers'
import UpdateUser from './crud/UpdateUser'
const CrudApp = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DisplayUsers/>}></Route>
                <Route path='/createUser' element={<CreateUser/>}></Route>
                <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default CrudApp