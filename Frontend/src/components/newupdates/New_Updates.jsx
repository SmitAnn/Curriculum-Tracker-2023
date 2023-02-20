import React, { useEffect, useState } from "react";
import {useNavigate,Link} from 'react-router-dom' 
import './Updates.css';
import axios from 'axios';
import img1 from "../../Images/update.jpg";
const New_Updates = () => {
    const navigate=useNavigate();   
    const [requirement,setRequirement]=useState([]);
const[linkValue,setLinkValue]=useState('');

    useEffect(() => {
       
        var userType=sessionStorage.getItem("userType");
             if(userType==='user')
             {
                setLinkValue("/requirements/ReadOne");
                axios.get('http://localhost:5000/api/requirement/getnew')
                .then((getData)=>{
                     setRequirement(getData.data.data);   
                         
              })
             }
             else
             {
                setLinkValue("/curriculums/ReadOne")
             axios.get('http://localhost:5000/api/curriculum/getnew')
           .then((getData)=>{
           setRequirement(getData.data);  
                   
            })
             }
    
  },[])
  const setData=(id)=>{
    
    localStorage.setItem("ID",id);

   }


    return (
        <div className="Updates">
            
                {Array.isArray(requirement)
                    ? requirement.map(update=>{
               
                    return (
                       
                        <div className="update">
                         
                            <img src={img1} alt='' />
                            <div className="noti">
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <span>{"Name : "+update.name}</span><br/>
                                    <span> {update.area+" , "}{update.category}</span><br/> 
                                    <span>{"Institute : "+update.institution}</span><br/>
                                     {/* <Link to='/requirements/ReadOne'>
                                    <button  type="button" onClick={()=>setData(update._id)}>View Details</button>
                                     </Link>  */}
                                    <Link to={linkValue}>
                                    <button  type="button" onClick={()=>setData(update._id)}>View Details</button>
                                     </Link> 
                                </div>
                               

                            </div>
                        </div>
                    )

                }): null}
        </div>
    )
}

export default New_Updates