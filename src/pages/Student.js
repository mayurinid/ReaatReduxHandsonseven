import React from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom';
import TableRow from '../Component/Tablerow';
const Students = () => {
  const navigate=useNavigate();
 const data= useSelector((state)=>state.student);
//  console.log("Data is here",data)
const AddNewStudent=()=>{
  navigate('/AddnewStudent')

}


  return (
    <>
    <header className='header1'>
      <h3>Student Details</h3>
      <button className='butn' onClick={AddNewStudent}>Add New Student</button>
    </header>
   <center><table>
      <thead>
        <tr>
          <th>Name</th>
          <th className='algn'>Age</th>
          <th className='algn'>Course</th>
          <th className='algn'>Batch</th>
          <th className='algn'>Change</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((student)=>{
            return(
              <tr key={student.id}>
                <TableRow student={student}/>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </center> 
    </>
  )
}

export default Students