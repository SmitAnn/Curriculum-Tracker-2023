import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Search.css';

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

    // const test = () => {

    // }


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

                                <div className="template" key={val.id}>
                                    <div className="box1">
                                        <h5>{val.name}</h5>
                                        {/* </div>
                                    <div className="box2"> */}
                                        <h5>{val.area}</h5>
                                        {/* </div>
                                    <div className="box3"> */}
                                        <h5>{val.category}</h5>
                                        {/* </div>
                                    <div className="box4"> */}
                                        <h5>{val.institution}</h5>
                                    </div>
                                    {/* <p className="price">{val.category}</p> */}
                                </div>

                            )
                        })
                }
            </div>


        </>
    )
}

export default Search