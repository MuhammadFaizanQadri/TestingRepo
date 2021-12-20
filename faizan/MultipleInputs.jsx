import React ,{useState} from "react";
import TextField from '@material-ui/core/TextField';
import DateTimePicker from 'react-datetime-picker';
import {useSelector , useDispatch} from "react-redux";
import { trigger,submit } from "./acion";


const MultipleInputs =() =>
{
  // const [user ,stateuser] = useState({
  //   title :"" ,
  //   description : "",
  //   trainerGuide:"",
  //   participents : "",
  //   meetingRoomName: "",
  //   dateTime:new Date(),
  // });

  
  // const handleChange = (e)=>
  // {
  //   const name = e.target.name;
  //   const value= e.target.value;
  //   stateuser({...user,[name]:value});
    

  // }
// const handleSubmit =(e) =>
// { 
//   e.preventDefault();
//   console.log(user)
//   stateuser({title:"",description:"",trainerGuide:"" ,participents:"",meetingRoomName:"",dateTime:new Date()});
//   stateuser({ ...user,dateTime:date})
//   const newRecords ={...user};
//   setRecords([...records,newRecords]);
//   console.log(records);
//   localStorage.setItem("DataThings",JSON.stringify(records));
//   // console.log("Form",e.target.fid)

// }


const myState  = useSelector((state1)=>state1.setData)
const dispatch = useDispatch()

  return (
 <>
 
 <center >
  <div style={{backgroundColor:"lightblue" , height: '500px' ,width: '35%' }}>
  <form action ="" onSubmit={()=>dispatch(submit())} >
    <div>
      <h1 style={{color:"Black"}}>Training Guide</h1>
    </div>
    <div>
      <TextField style={{fontWeight:"Bold" ,width:400}} autocomplete='off' id="standard-basic" label="Title" variant="standard" name ="title" value ={myState.title} onChange={()=>dispatch(trigger())}/>
    </div>

    <div>
      <TextField style={{fontWeight:"Bold", width:400}} autocomplete='off' id="standard-basic" onChange={()=>dispatch(trigger())} label="Description " variant="standard" multiline row={2} maxRows={3} name ="description" value ={myState.description}/>   
   </div>

    <div>
      <TextField style={{fontWeight:"Bold" ,width:400}}  autocomplete='off' id="standard-basic" onChange={()=>dispatch(trigger())} label="Participents " variant="standard" multiline row={2} maxRows={3} value ={myState.participents} name="participents"/>   </div>
    <div>
    <TextField style={{fontWeight:"Bold", width:400}} autocomplete='off' id="standard-basic" onChange={()=>dispatch(trigger())} label="Trainer Name " variant="standard" value ={myState.trainerGuide} name="trainerGuide" /> </div>
    <div>
    <TextField style={{fontWeight:"Bold" ,width:400}} autocomplete='off' id="standard-basic" onChange={()=>dispatch(trigger())} label="Meeting Room" variant="standard" value ={myState.meetingRoomName} name="meetingRoomName"/>
    </div>
  
    <div style={{width:'400'}}>
    <DateTimePicker style={{fontWeight:"Bold" ,width:400}} format= "dd-mm-yy hh-mm-ss"placeholder ='Select Date and Time ' value={myState.date} onChange={()=>dispatch(trigger())} />
    </div >
    <br/>
    <input type="submit" value="Submit" style={{ fontWeight:"bold" ,borderRadius:'8px' ,padding:'14px 40px'}} />
  </form> 
  
  </div>
</center>

</>
);
}

export default MultipleInputs;