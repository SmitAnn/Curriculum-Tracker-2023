import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Search.css";
import TextField from "@mui/material/TextField";




const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {

        axios.get('http://localhost:5000/api/curriculum/read')
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
                            console.log(searchTerm)
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
                                    <h3>{val.name}</h3>
                                    <h3>{val.area}</h3>
                                    <h3>{val.category}</h3>
                                    <h3>{val.institution}</h3>
                                   

                  </div>
                            )
                        })
                }
            </div>


        </>
    )
}

export default Search