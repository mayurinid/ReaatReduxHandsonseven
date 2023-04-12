import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AddNewStudents from '../pages/AddNewStudent'
import EditDetails from '../pages/EditDetails'
import Home from '../pages/Home'
import Students from '../pages/Student'
import ContactUs from '../pages/Contact'


const RoutesP = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Students' element={<Students/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
      <Route path='/AddnewStudent' element={<AddNewStudents/>}/>
      <Route path='/EditDetails' element={<EditDetails/>}/>
    </Routes>
  )
}

export default RoutesP