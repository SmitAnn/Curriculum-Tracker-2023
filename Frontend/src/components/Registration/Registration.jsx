import React from 'react';
import "./Registration.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBInput,
    MDBRadio
}
    from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


// import 'mdbreact/dist/css/mdb.css';

const Registration = () => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        reEnterPassword: "",
        address: "",
        phoneNumber: "",
        gender: "",
        qualification: "",
        experience: "",
        userType:"user"
    })




    const handleChange = e => {

        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value

        })

    }
    const register = () => {
        const { userName, email, password, reEnterPassword } = user
        if (userName && email && password && (password === reEnterPassword)) {

            axios.post("http://localhost:5000/user/signup", user)
                .then(res => alert("Registration Successfull!!!"))

        } else {
            alert("Invalid Input!")
        }

    }

    return (
        <MDBContainer fluid>

            <MDBRow className='justify-content-center align-items-center m-5'>

                <MDBCard>
                    <MDBCardBody className='px-4'>

                        <h1 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h1>

                        <MDBRow>

                            <MDBCol md='6'>
                                <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' name="userName" value={user.userName} onChange={handleChange} />

                                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' name="email" value={user.email} onChange={handleChange} />

                                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form5' type='password' name="password" value={user.password} onChange={handleChange} />

                                <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form5' type='reEnterPassword' name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} />


                                <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form3' type='text' name="address" value={user.address} onChange={handleChange} />
                                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form3' type='text' name="phoneNumber" value={user.phoneNumber} onChange={handleChange} />



                                {/* <MDBCol md='6' className='mb-4' name="gender" value={user.gender} onChange={handleChange}>
                                    <h6 className="fw-bold">Gender: </h6>
                                    <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                                    <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                                    <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
                                </MDBCol> */}

                                <MDBInput wrapperClass='mb-4' label='Gender' size='lg' id='form3' type='text' name="gender" value={user.gender} onChange={handleChange} />

                                <MDBInput wrapperClass='mb-4' label='Qualification' size='lg' id='form3' type='text' name="qualification" value={user.qualification} onChange={handleChange} />
                                <MDBInput wrapperClass='mb-4' label='Experience' size='lg' id='form3' type='text' name="experience" value={user.experience} onChange={handleChange} />



                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                        <MDBRow>



                            <MDBCol md='6'>

                            </MDBCol>


                        </MDBRow>

                        <MDBRow>



                        </MDBRow>




                        <div>
                            <MDBBtn className='mb-4' size='lg' onClick={register} >Register</MDBBtn>
                            &nbsp;&nbsp;&nbsp;
                            <Link to='/'> <MDBBtn className='mb-4' size='lg'>
                               
                                    Login
                                

                            </MDBBtn></Link>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>
        </MDBContainer>
    );
}






export default Registration