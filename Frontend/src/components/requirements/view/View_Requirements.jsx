import Axios from 'axios';
import FileDownload from "js-file-download"
import {Link} from 'react-router-dom' 
import {MDBCol,MDBRow,MDBCard,MDBCardText,MDBCardBody} from 'mdb-react-ui-kit';
import React, { useEffect, useState } from "react";
import Sidebar from '../../Sidebar/Sidebar';
import RightSide from '../../RightSide/RightSide';

const View_Requirements = () => {
  

  const [visible, setVisible] = useState(true);
  const [requirement,setRequirement]=useState({
   name:"",
        category:"",
        area:"",
        institution:"",
        hours : "",
        file: "",
        isClosed:false
  });

  
  
     
  
const download =(e)=>
{
  e.preventDefault();
 Axios({
    url: `http://localhost:5000/api/requirement/download/${requirement.file}`,
  methgod:'GET',
    data: {
    file: requirement.file
  },
  responseType:'blob'

}).then((res)=>{
   FileDownload(res.data,requirement.file)
  })
}

 useEffect(()=>{
  //sessionStorage.setItem("userType","user");
  var userType=sessionStorage.getItem("userType");
  console.log(userType);
       if(userType==='user')
       {
        setVisible(true);
       }
       else
       {
        setVisible(false);
       }
       var Id = localStorage.getItem('ID');
       console.log(Id);
       Axios.get('http://localhost:5000/api/requirement/readone/'+Id)
       .then((getData)=>{
        setRequirement(getData.data);   
  
      });         
 
    },[])

    const setData=()=>{

       localStorage.setItem("name",requirement.name);
       localStorage.setItem("area",requirement.area);
       localStorage.setItem("institution", requirement.institution);
       localStorage.setItem("category",requirement.category);
       localStorage.setItem("hours",requirement.hours);   
      
      /* setRequirement({'name':name,'area':area,'institution':institution,'category':category,
       'hours':hours,'file':files});   
       localStorage.setItem(LOCAL_STORAGE_KEY,json.stringify(requirement));*/ 
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
              
 <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Requirement Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{requirement.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Area</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{requirement.area}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Institution</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{requirement.institution}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Category</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{requirement.category}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Hours</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{requirement.hours}</MDBCardText>
                  </MDBCol>
                  </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>File</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                   <button onClick={(e=>download(e))}>{requirement.file}</button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            <div className="d-flex justify-content-center pt-3">
            <Link to='/requirements/ReadAll'>
                      <button type="button" className="btn btn-secondary btn-md">Back</button>
                    </Link>
                    
                    <Link to='/curriculum/create'>
                    {visible && !requirement.isClosed && <button type="button"  className="btn btn-secondary btn-md" onClick={()=>setData()}>Respond</button>}
</Link>
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

export default View_Requirements