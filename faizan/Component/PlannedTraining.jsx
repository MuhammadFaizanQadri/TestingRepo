import React,{useState} from "react";
import Table from '@mui/material/Table'


const PlannedTraining =() => {
  //const [records , setRecords] = useState([]);
    const localStorageData = JSON.parse(localStorage.getItem("DataThings"));
 //   setRecords([records,localStorageData]);
    const D="Date & Time "
  //  console.log(typeof(localStorageData));
  
    return (
      <>
       <Table style={{backgroundColor:"lightBlue" ,width:"100%" , height:"300px"}}  striped bordered hover>
         <thead>
         <tr >
           <th style={{height:"10px" , fontSize:"30px" , color:"black"}}>Title</th>
           <th style={{height:"10px" , fontSize:"30px" , color:"black"}}>Description</th>
           <th style={{height:"10px" ,  fontSize:"30px" , color:"black"}}>TraninerName</th>
           <th style={{height:"10px" ,  fontSize:"30px" , color:"black"}}>Participents</th>
           <th style={{height:"10px" ,  fontSize:"30px" , color:"black"}}>MeetingRoomName</th>
           <th style={{height:"10px" ,  fontSize:"30px" , color:"black"}}>{D} </th>
         </tr>
         </thead>
         {localStorageData.map((value)=>{
           return (
             <tbody>
            <tr style={{ border:"1px solid black"}}>
              <td style={{height:"10px", textAlign:"center",fontSize:"30px" , color:"Blue" }}>{value.title}</td> 
              <td style={{height:"10px", textAlign:"center",fontSize:"30px" , color:"Blue"}}>{value.description}</td> 
              <td style={{height:"10px" , textAlign:"center",fontSize:"30px" , color:"Blue"}}>{value.trainerGuide}</td> 
              <td style={{height:"10px", textAlign:"center",fontSize:"30px" , color:"Blue"}}>{value.participents}</td> 
              <td style={{height:"10px", textAlign:"center",fontSize:"30px" , color:"Blue"}}>{value.meetingRoomName}</td> 
              <td style={{height:"10px" ,textAlign:"center" ,fontSize:"30px" , color:"Blue"}}>{value.dateTime}</td> 
              </tr>
              </tbody>
           );
         })
         }
       </Table>
    </>
    );
  }

  export default PlannedTraining;
  