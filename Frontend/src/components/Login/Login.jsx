import React from 'react';
import "./Login.css";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const userAuthentication = () => {

        if (email === '') {
            alert("Username required")
        } if (password === '') {
            alert("Password required")
        }
        else {
            const userData =
            {
                "email": email,
                "password": password
            }
            axios.post(`http://localhost:5000/user/signin`,
                userData
            ).then((getData) => {

                if (getData.data.status === "success") {
                    let token = getData.data.token;
                    let userId = getData.data.data[0]._id;
                    let userType = getData.data.data[0].userType;
                    let name = getData.data.data[0].userName;
                    sessionStorage.setItem("userToken", token);
                    sessionStorage.setItem("userId", userId);
                    sessionStorage.setItem("userType", userType);
                    sessionStorage.setItem("name", name);
                
                    navigate("/dashboard");

                }
                else {
                    alert("Invalid login credentials");
                }
            }
            )
        }
    }


    // const [user, setUser] = useState({
    //     email: "",
    //     password: ""
    // })
    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }
    // const login = () => {
    //     axios.post("http://localhost:5000/login", user)
    //         .then(res => alert(res.data.message))
    // }

    return (

        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-white-50 mb-3">Please enter your login and password!</p>

                            <MDBInput wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" onChange={(e) => setemail(e.target.value)} />
                            <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlpass' type='password' size="lg" onChange={(e) => setpassword(e.target.value)} />

                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />

                            <MDBBtn size='lg' onClick={userAuthentication}>
                                Login
                            </MDBBtn>

                            <hr className="my-4" />

                            <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                                <MDBIcon className="mx-2" />
                                <Link to='/registration'>
                                    Register Now!!!
                                </Link>
                            </MDBBtn>

                            {/* <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                                <MDBIcon fab icon="facebook-f" className="mx-2" />
                                Sign in with facebook
                            </MDBBtn> */}

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}



export default Login