import React from 'react';
import Cards from '../Cards/Cards';
import Table from '../Table/Table';
import './MainDash.css';
import Sidebar from '../Sidebar/Sidebar';
import RightSide from '../RightSide/RightSide';
const MainDash = () => {
    var name=sessionStorage.getItem("name");
    console.log(name);
    return (
        <div className="App">
        <div className="AppGlass">
     <Sidebar/>
        <div className='MainDash'>
            <h1>{"Hi "+ name+","}</h1>
            <Cards />

            <Table />
        </div>
        <RightSide/>
  </div>
  </div>
    )
}

export default MainDash