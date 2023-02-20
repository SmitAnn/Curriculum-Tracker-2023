import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom' 
import React, { useEffect, useState } from "react";
import Sidebar from '../../Sidebar/Sidebar';
import RightSide from '../../RightSide/RightSide';

const Update_Requirement = () => {
  const navigate=useNavigate();   
  const [requirement,setRequirement]=useState({});

  useEffect(()=>{
       
   setRequirement({
    Id:localStorage.getItem('ID'),
    name:localStorage.getItem('name'),
    category:localStorage.getItem('category'),
    area:localStorage.getItem('area'),
    institution:localStorage.getItem('institution'),
    hours : localStorage.getItem('hours'),
    file: localStorage.getItem('file'),
    isClosed:localStorage.getItem('isClosed')
   }) },[]
    )


   
  
 const handleChange=e=>{
    
  if(e.target.name !=='file')
  {
    const {name,value}=e.target
    setRequirement({...requirement,[name]:value})
    console.log(value);
  }
  else
  {
   let name=e.target.name;
  let value=e.target.files[0];
  setRequirement({...requirement,[name]:value})
  console.log(value);
  } 
 }

 const sendDataToAPI = async(event)=>{
  var token=sessionStorage.getItem("userToken");
  const config={
    headers :{'content-type':'multipart/form-data','x-access-token':token}};
   const formData=new FormData();
   formData.append('id', requirement.Id);
   formData.append('name', requirement.name);
   formData.append('area',requirement.area);
   formData.append('category',requirement.category);
   formData.append('institution',requirement.institution);
   formData.append('hours',requirement.hours);
   formData.append('file',requirement.file);

    const response= await axios.put(`http://localhost:5000/api/requirement/update`,formData,config)
    if(response.data.status==="Unauthorised user")
    {
    alert("Please login first");
    navigate('/')
    }
    else
    {
      if(response.data.success)
      {
        alert("Requirement updated successfully");
        navigate('/requirements/ReadAll');
      }
      else
      {
        alert("Requirement update failed");
      }
    }
 }
  return (
    <div className="App">
    <div className="AppGlass">
 <Sidebar/>
    <section className="Background">
    
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col ">
        <div className="card card-form" >
          <div className="row g-0">
          
              <div className="col-xl-12">
              
          <form encType='multipart/form-data'>
            <div className="card-body p-md-5 text-black">
            <div className="d-flex justify-content-center pt-3">
            <h1 className="fw-Bolder mb-3 pb-3 headeing" >Training Requirement</h1>
            </div>
            <br/><br/>
<div >

  <input type="text" name='name' value={requirement.name} onChange={handleChange}  className="form-control form-control-md" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of Requirement" required/>
 
</div>
<br/>

  <div >
    <select id="Select" name='area' value={requirement.area} onChange={handleChange} className="form-control form-control-md"   placeholder="Area of Training" required>
    <option>Select Area</option>
    <option>FSD</option>
      <option>ML-AI</option>
      <option>DSA</option>
      <option>RPA</option>
      <option>ST</option>
      <option>CSA</option>
      
    </select>
  </div>
<br/>
<div >

  <input type="text" name='institution' value={requirement.institution} onChange={handleChange} className="form-control form-control-md" id="exampleInputPassword1" placeholder="Institution" required />
</div>
<br/>

  <div >
    <select id="Select" name ='category' value={requirement.category} onChange={handleChange} className="form-control form-control-md"   placeholder="Category" required>
    <option>Select</option>
    <option>Retail</option>
      <option>Academic</option>
      <option>Corporate</option>
 </select>
  </div>

<br/>
<div >

  <input type="text" name='hours' value={requirement.hours} onChange={handleChange}  className="form-control form-control-md" id="exampleInputPassword1" placeholder="No: of hours of training" required/>
</div>
<br/>
<div className="form-group">
                            <input type="file"  onChange={handleChange} name="file" className='form-control form-control-md' placeholder='Choose file'/>
                        </div>
                     


<br/>
<div className="d-flex justify-content-center pt-2">
<Link to='/requirements/ReadAll'>
                      <button type="button" className="btn btn-secondary btn-md">Back</button>
                    </Link>
                   
                    <button onClick={sendDataToAPI} type="button" className="btn btn-secondary btn-md ms-2">Update</button>
                  </div> 
</div>
</form>

  </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
<RightSide/>
  </div>
  </div>
  )
}

export default Update_Requirement