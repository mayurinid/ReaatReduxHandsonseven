import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch,useSelector } from 'react-redux';
import { studentAdded } from '../feature/StudentSlice';

const AddNewStudents = () => {
    const data=useSelector((state)=>state.student);
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [Course,setCourse]=useState("");
    const [Batch,setBatch]=useState("");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const cancelAddStudent=()=>{
        navigate("/Students");
        
    }

    const SubmitNewStudent=()=>{
        if(Name && Age && Course && Batch){
            dispatch(studentAdded({
             "id":data.length,
                "Name":Name,
                "Age":Age,
                "Course":Course,
                "Batch":Batch
            }))
            navigate("/Students")
            
        }

    }
  return (
    <>
    <div className='box'>
        <div className='header'>
           <div> <input type='text' name='Name' placeholder='Name'value={Name} onChange={(e)=>setName(e.target.value)}/></div>
                      <div> <input type='text' name='Age' placeholder='Age'value={Age} onChange={(e)=>setAge(e.target.value)}/></div>
           <div><input type='text' name='Course' placeholder='Course'value={Course} onChange={(e)=>setCourse(e.target.value)}/></div>
           <div><input type='text' name='Batch' placeholder='Batch'value={Batch} onChange={(e)=>setBatch(e.target.value)}/></div>
        </div>
    </div>
    <div className='box2'>
        <button className='butn2' onClick={cancelAddStudent} style={{backgroundColor:'gray'}}>Cancel</button>
        <button className='butn2' onClick={SubmitNewStudent}>Submit</button>
    </div>
    </>
  )
}

export default AddNewStudents