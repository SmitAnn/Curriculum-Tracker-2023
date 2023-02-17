
import {MDBCol,MDBContainer,MDBRow,MDBCard,MDBCardText,MDBCardBody,MDBCardImage,MDBBtn,MDBListGroup,MDBListGroupItem} from 'mdb-react-ui-kit';
    import React, { useEffect ,useState} from "react";
    import axios from 'axios';
    import image from './Image/profile.jpg'
    import Sidebar from '../Sidebar/Sidebar';
import RightSide from '../RightSide/RightSide';

    const Profile = () => {
      const [visible, setVisible] = useState(true);
      const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        reEnterPassword: "",
        address: "",
        phoneNumber: "",
        gender: "",
        qualification: "",
        experience: ""
      });
      const [changePassword, setChangePassword] = useState({
        id:sessionStorage.getItem("userId"),
        currentPassword: "",
        password: "",
        reEnterPassword: ""
      });


  useEffect(() => {
    sessionStorage.setItem("userId","63e2072a586818b312d44ca2");
    var userId=sessionStorage.getItem("userId");
     
      axios.get('http://localhost:5000/user/readone/'+userId)
      .then((getData)=>{
        setUser(getData.data);   
        

          });         
 
  },[])

const setVisibility=()=>{
setVisible(true);
}

const handleChange=e=>{
  const {name,value}=e.target
  setChangePassword({...changePassword,[name]:value})
  
 }
 const saveData = () => {
  const { currentPassword, password, reEnterPassword } = changePassword
        if (currentPassword && reEnterPassword && password  ) 
        {
          axios.post(`http://localhost:5000/user/passwordCheck`,
          changePassword
          ).then((getData)=>
          {
                if(getData.data.status==="success")
                {
                           if(password===reEnterPassword)  
                              {
                              axios.post("http://localhost:5000/user/passwordChange", changePassword)
                                    .then(res => alert("Password Changed Successfully!!!"))
                                    setVisibility(false);
                              }
                              else
                              {
                                alert("Password and re type password do not match");
                              }
                        
                       
                } 
                else
                        {
                              alert("Current Password is incorrect");
                        }
          }
          )

      }
      else
      {
            alert("Invalid Input!")
      }

}
  return (
 
    <div className="App">
    <div className="AppGlass">
        <Sidebar/>
         <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={image}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{user.userName}</p>
                <p className="text-muted mb-4">{user.address}</p>
              
              </MDBCardBody>
            </MDBCard>

            {visible && <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                  <MDBCardText><h4>Change Password</h4></MDBCardText>
                 
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                   
                  <input type="password" name='currentPassword' value={changePassword.currentPassword} onChange={handleChange} className="form-control form-control-md" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Current Password" required/>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                   
                  <input type="password" name='password' value={changePassword.password} onChange={handleChange} className="form-control form-control-md" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password" required/>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                    
                    

                    <input type="password" name='reEnterPassword' value={changePassword.reEnterPassword} onChange={handleChange} className="form-control form-control-mg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Re type password" required/>
                  </MDBListGroupItem>
                  <MDBListGroupItem >
                  <div className="d-flex justify-content-center mb-2">
                  <MDBBtn onClick={saveData}>Change password</MDBBtn></div>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>}
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
              <MDBRow>
              <div className="d-flex justify-content-center mt-3">
              <h2 className="fw-Bolder mb-3 pb-3 headeing mt-3" >Profile</h2></div>
          
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.userName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.phoneNumber}</MDBCardText>
                  </MDBCol>
                </MDBRow>
           

                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>


                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Gender</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.gender}</MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Qualification</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">MCA</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Experience</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{user.experience}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              
              </MDBCardBody>
            </MDBCard>

         
          </MDBCol>
        </MDBRow>


      </MDBContainer>
    </section>
    <RightSide/>
    </div>
    </div>
  )
}

export default Profile