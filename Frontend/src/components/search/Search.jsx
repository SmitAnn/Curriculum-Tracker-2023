import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Search.css';
import {useNavigate,Link} from 'react-router-dom' 
import TextField from "@mui/material/TextField";




const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    // const [key, setKey] = useState("")


    useEffect(() => {

        axios.get('http://localhost:5000/api/curriculum/read', { params: { searchTerm, limit: 3 } })
            .then((getData) => {
                setData((getData.data));

            })
    }, [])

    const setId=(id)=>{
    
        localStorage.setItem("ID",id);
    
       }
    

    return (
        <>
            <div>

                <div className="search">
                    <TextField
                        id="outlined-basic"
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                        variant="outlined"
                        fullWidth
                        label="Enter Keywords"
                    />
                </div>
                {/* <List input={inputText} /> */}
            </div>

            <div className="template_Container">
                {
                    data
                        .filter((val) => {
                            // console.log(searchTerm)
                            // if (searchTerm == "") {
                            //     return val;
                            // } else 

                            if (searchTerm !== '') {
                                if (val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    || val.area.toLowerCase().includes(searchTerm.toLowerCase())
                                    || val.category.toLowerCase().includes(searchTerm.toLowerCase())
                                    || val.institution.toLowerCase().includes(searchTerm.toLowerCase())
                                ) {
                                    return val;
                                }
                            }
                        })
                        .map((val) => {
                            return (
                                <div className="Updatesearch">
                                <div className="update">
                         
                                
                                <div className="noti">
                                    <div style={{ marginBottom: '0.5rem' }}>
                                        <span>{"Name : "+val.name}</span><br/>
                                        <span> {val.area+" , "}{val.category}</span><br/> 
                                        <span>{"Institute : "+val.institution}</span><br/>
                                         
                                        <Link to='/curriculums/ReadOne'>
                                        <button  type="button" onClick={()=>setId(val._id)}>View Details</button>
                                         </Link> 
                                    </div>
                                   
    
                                </div>
                            </div>
                            </div>

                            )
                        })
                }
            </div>


        </>
    )
}

export default Search