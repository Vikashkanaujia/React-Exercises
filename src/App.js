import './App.css';
import ConfirmPassword from './ConfirmPassword';
import AddElementUsingInput from './Practice/AddElementUsingInput';
import RadioButtonDefaultChecked from './Practice/RadioButtonDefaultChecked';
import UseRef from './Practice/UseRef';



// import { useState } from 'react';
// import Allapi from './Practice/Allapi';
// import ChangeBtnColorOnclick from './Practice/ChangeBtnColorOnclick';

// import { MapArray } from './Practice/MapArray';
// import MapWithFilter from './Practice/MapWithFilter';
// import FilterWithNumber from './Practice/FilterWithNumber';
// import Count from './Practice/Count'
// import OnchangeE from './Practice/OnchangeE';
// import GetApi from './Practice/GetApi';
// import PostApi from './Practice/PostApi';
// import UpdateApi from './Practice/UpdateApi';
// import DeleteApi from './Practice/DeleteApi';
// import Debouncing from './Practice/Debouncing';
// import Matrix from './Practice/Matrix';


// import Props from './Practice/Props';

//    <--- pass value from parent componet to child component and print in child component
//    <--- pass a function from parent componet to child componet and call paret function from child component
//    <--- Accept a parameter from child component to parent component and use in parent component.


function App() { 
  // const [name,setName]=useState("Vikash");
  
  // const changeName = (value) =>{
  //   setName("Chotu");
  //   console.log(value)
  // }
  return (
        <>
             {/* <MapArray/> 
              <MapWithFilter/> 
              <FilterWitNumber/> 
              <Count/> 
              {/* <OnchangeE/>  */}
              {/* <GetApi/> 
              <PostApi/>          
              <UpdateApi/> 
              <DeleteApi/> 
              <Debouncing/>
              <Matrix/>  */}
              {/* <Allapi/> */}
              {/* <ChangeBtnColorOnclick/> */}
              {/* <UseRef/> */}
              {/* <RadioButtonDefaultChecked/> */}
              {/* <ConfirmPassword/> */}
              <AddElementUsingInput/>




             {/* <Props name = {name} changeName = {changeName}/> */}
             
             {/* <button onClick={()=>setName("Chotu")}>Change name</button> */}
        </>
  );
}

export default App;
