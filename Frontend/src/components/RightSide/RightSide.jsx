import React, {useState,useEffect} from "react";
import Review from '../Review/Review';
import Search from '../search/Search'
import Updates from '../newupdates/New_Updates';
import './RightSide.css';


const RightSide = () => {

    const [heading,setHeading]=useState('');

    useEffect(() => {
       
        var userType=sessionStorage.getItem("userType");
             if(userType==='user')
             {
                setHeading("New requirements");
             }
             else
             {
                setHeading("Waiting for approval")
             }
    
  },[])
  const setData=(id)=>{
    localStorage.setItem("ID",id);
 
   }

    return (
        <div className="RightSide">
            <div>
                <h3>Search</h3>
                <Search />
            </div>

            <div>
                <h3>{heading}</h3>
                <Updates />
            </div>
            

        </div>

    )
}
export default RightSide