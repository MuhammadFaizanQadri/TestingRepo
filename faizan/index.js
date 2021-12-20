import React  from "react";
import ReactDOM  from "react-dom";
import { render } from "@testing-library/react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Link } from "react-router-dom";
import Image from "./Image.jpg";
import MultipleInputs from "./MultipleInputs";
import PlannedTraining from "./Component/PlannedTraining";
import store from "./store"

import {Provider} from "react-redux";

// function homePage (){
//   return (<Link to="/"> </Link>);
// }
// function traininngPage (){
//   return (<Link to="/PlannedTraining"> </Link>);
// }


// const dataSet = [] ;
// const localStorageData = JSON.parse(localStorage.getItem("DataThings"));
// localStorageData.map((value)=>
// {
//   return
//   (
//     dataSet.push(value)
//   )

// });
// console.log("Dataset",dataSet);
ReactDOM.render(
  <Provider store={store}>
  <>
  
  <body >
 
  <BrowserRouter>
  {/* <div>
    <input type="Button" value="Home Page" onClick={homePage}/>
    <input type="Button" value="Schedule Training" onClick={traininngPage}/>
  </div> */}
  <Link to="/">Home</Link>
  <Link to="/PlannedTraining">Scheduale</Link>
  <Routes>
    <Route path="/" element={<MultipleInputs/>}></Route>
    <Route path="/PlannedTraining" element={<PlannedTraining/>}></Route>
  </Routes>
  </BrowserRouter>


</body>

  </> 
  </Provider>,
  document.getElementById('root')
    );
 