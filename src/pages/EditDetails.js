import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { studentAdded, studentUpdated } from '../feature/StudentSlice';


const EditDetails = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const data=useLocation();
    const dataid=data.state.id;
    const StdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid));
  
    const stdName=StdDetail[0].Name
    const stdAge=StdDetail[0].Age
    const stdCourse=StdDetail[0].Course
    const stdBatch=StdDetail[0].Batch

    
    const [Name,setName]=useState(stdName);
    const [Age,setAge]=useState(stdAge);
    const [Course,setCourse]=useState(stdCourse);
    const [Batch,setBatch]=useState(stdBatch);
    const SubmitHandler=()=>{
      if(Name && Age && Course && Batch){
        dispatch(studentUpdated({
          "id":dataid,
          "Name":Name,
          "Age":Age,
          "Course":Course,
          "Batch":Batch
        }))
        navigate('/Students')
      }
      
    }
  return (
    <>
     <div className='header'>
         <div>   <input type='text' name='Name' placeholder='Name'value={Name} onChange={(e)=>setName(e.target.value)}/></div>
         <div>    <input type='text' name='Age' placeholder='Age'value={Age} onChange={(e)=>setAge(e.target.value)}/></div>
         <div>    <input type='text' name='Course' placeholder='Course'value={Course} onChange={(e)=>setCourse(e.target.value)}/></div>
         <div>    <input type='text' name='Batch' placeholder='Batch'value={Batch} onChange={(e)=>setBatch(e.target.value)}/></div>
        </div>
        <div className='box2'>
        <button className='butn2' onClick={SubmitHandler} style={{backgroundColor:'skyblue'}}>Update</button>
        
    </div>
    </>
  )
}

export default EditDetails