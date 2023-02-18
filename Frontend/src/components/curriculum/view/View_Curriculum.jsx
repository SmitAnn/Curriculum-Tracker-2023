import axios from 'axios';
import FileDownload from "js-file-download"
import { Link } from 'react-router-dom'
import { MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from "react";
import Sidebar from '../../Sidebar/Sidebar';
import RightSide from '../../RightSide/RightSide';

const View_Curriculum = () => {

  const [visible, setVisible] = useState(true);
  const [curriculum, setCurriculum] = useState({
    
          comments:'',
          name:'',
          area:'',
          institution:'',
          category:'',
          hours : '',
          file: ''
  });


  const download = (e) => {
    e.preventDefault();
    axios({
      url: `http://localhost:5000/api/curriculum/download/${curriculum.file}`,
      methgod: 'GET',
      data: {
        file: curriculum.file
      },
      responseType: 'blob'
      

    }).then((res) => {
      console.log(res.data)
      FileDownload(res.data, curriculum.file)
    })
  }


  useEffect(()=>{

    var Id = localStorage.getItem('ID');
    console.log(Id);
    axios.get('http://localhost:5000/api/curriculum/readone/'+Id)
    .then((getData)=>{
     setCurriculum(getData.data);   

   });         

 },[])


     

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
                          <h1 className="fw-Bolder mb-3 pb-3 headeing" >Curriculum</h1>
                        </div>

                        <MDBCard className="mb-4">
                          <MDBCardBody>
                          <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>comments</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{curriculum.comments}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Requirement Name</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{curriculum.name}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Area</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{curriculum.area}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Institution</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{curriculum.institution}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Category</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{curriculum.category}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>Hours</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <MDBCardText className="text-muted">{curriculum.hours}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="3">
                                <MDBCardText>File</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="9">
                                <button onClick={(e => download(e))}>{curriculum.file}</button>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                        </MDBCard>
                        <div className="d-flex justify-content-center pt-3">
                          <Link to='/curriculums/ReadAll'>
                            <button type="button" className="btn btn-secondary btn-lg">Back</button>
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

export default View_Curriculum