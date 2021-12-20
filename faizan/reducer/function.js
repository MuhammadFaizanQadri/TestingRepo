

//   const [user ,stateuser] = useState({
//     title :"" ,
//     description : "",
//     trainerGuide:"",
//     participents : "",
//     meetingRoomName: "",
//     dateTime:new Date(),
//   });
  const initialState ={
    title :"" ,
    description : "",
    trainerGuide:"",
    participents : "",
    meetingRoomName: "",
    dateTime:new Date(),

  }

  const setData =(state=initialState ,action) =>
  {
      switch(action.type){
          case "handleChange":
              return (e)=>{ 
                const name = e.target.name;
                const value= e.target.value;
              //  stateuser({...user,[name]:value});
              state.name=value;
              }
              
          case "handleSubmit":
              return (e) =>
              { 
                e.preventDefault();
           
                // stateuser({title:"",description:"",trainerGuide:"" ,participents:"",meetingRoomName:"",dateTime:new Date()});
                // stateuser({ ...user,dateTime:date})
                // const newRecords ={...user};
                // setRecords([...records,newRecords]);
                // console.log(records);
                localStorage.setItem("DataThings",JSON.stringify(state));
                // console.log("Form",e.target.fid)
              
              }
            default : return state
      }
  }

  export default setData;