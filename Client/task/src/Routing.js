import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './DinAftale/Landingpage'
import Addfeature from './Admindashboard/Admin'
import Admindashboard from './Admindashboard/Admindashboard'
import Register from './DinAftale/Register'
import Adimregister from './Admindashboard/Adminregister'
import Adminlogin from './Admindashboard/Adminlogin'
import SignupForm from './DinAftale/SignupForm'


const Routing = () => {
  return (
    <>
    <Routes>
       <Route path='/' element={<Landingpage/>}/>
       <Route path="/signup" element={<SignupForm/>} />
       <Route path='/register' element={<Register/>}/>
         <Route path='/admin' element={<Adminlogin/>}/>
         <Route path='/adminregister' element={<Adimregister/>}/>
         <Route path='/admindashboard' element={<Admindashboard/>}>
         <Route path='addfeature' element={<Addfeature/>}/>
       
         </Route>
       </Routes>
    </>
  )
}

export default Routing