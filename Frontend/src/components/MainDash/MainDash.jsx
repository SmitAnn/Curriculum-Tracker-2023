import React from 'react';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './MainDash.css';
import Sidebar from '../Sidebar/Sidebar';
import RightSide from '../RightSide/RightSide';
import Curriculum_Dash from '../curriculum/dashboard/Curriculum_Dash';
const MainDash = () => {
    var name=sessionStorage.getItem("name");
    console.log(name);
    return (
        <div className="App">
        <div className="AppGlass">
     <Sidebar/>
        <div className='MainDash'>
            <h1>{"Hi "+ name+","}</h1>
          

        <Curriculum_Dash/>
        </div>
        <RightSide/>
  </div>
  </div>
    )
}

export default MainDash