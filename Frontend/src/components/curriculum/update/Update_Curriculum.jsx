import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import Sidebar from '../../Sidebar/Sidebar';
import RightSide from '../../RightSide/RightSide';
const Update_Curriculum = () => {

  const navigate = useNavigate();
  const [curriculum, setCurriculum] = useState({
    comments: '',
    file: '',
    isApproved: false
  });

  useEffect(() => {

    setCurriculum({
      Id: localStorage.getItem('ID'),
      comments: localStorage.getItem('comments'),
      file: localStorage.getItem('file'),
      isApproved: localStorage.getItem('isApproved')

    })
  }, []
  )


  const handleChange = e => {

    if (e.target.name === 'isApproved'){
      let name = e.target.name;
      let value = e.target.checked;
      setCurriculum({ ...curriculum, [name]: value })
    }
    else if (e.target.name !== 'file') {
      const { name, value } = e.target
      setCurriculum({ ...curriculum, [name]: value })
      console.log(value);
    }
    else {
      let name = e.target.name;
      let value = e.target.files[0];
      setCurriculum({ ...curriculum, [name]: value })
      console.log(value);
    }

  }



  const sendDataToAPI = async (event) => {
    
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };
    const formData = new FormData();
    formData.append('id', curriculum.Id);
    formData.append('comments', curriculum.comments);
    formData.append('file', curriculum.file);
    formData.append('isApproved', curriculum.isApproved);
    console.log(curriculum.isApproved)
    const response = await axios.put(`http://localhost:5000/api/curriculum/update`, formData, config)
    if (response.data.success) {
      alert("curriculums updated successfully");
      navigate('/curriculums/ReadAll');
    }
    else {
      alert("curriculum update failed");
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
                          <h1 className="fw-Bolder mb-3 pb-3 headeing" >Curriculum</h1>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div>
                        <textarea className="form-control form-control-lg" name='comments' value={curriculum.comments} onChange={handleChange} id="exampleFormControlTextarea1" rows="3" placeholder="Comments" required></textarea>
                        </div>
                        <br />
                        <div className="form-group">
                          <input type="file" onChange={handleChange} name="file" className='form-control form-control-lg' placeholder='Choose file' />
                        </div>
                        <br />
                        <div className="form-group">
                          
                          <input class="form-check-input-lg" type="checkbox" onChange={handleChange} value={curriculum.isApproved} name="isApproved" id="flexCheckChecked" />
                          <label class="form-check-label" for="flexCheckChecked" /> Approve
                        </div>
                        <div className="d-flex justify-content-center pt-3">
                          <Link to='/curriculums/ReadAll'>
                            <button type="button" className="btn btn-secondary btn-lg">Back</button>
                          </Link>
                          <button onClick={sendDataToAPI} type="button" className="btn btn-secondary btn-lg ms-2">Update</button>
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

export default Update_Curriculum