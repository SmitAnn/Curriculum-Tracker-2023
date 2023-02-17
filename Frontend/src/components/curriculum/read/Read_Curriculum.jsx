import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Sidebar from '../../Sidebar/Sidebar';
import RightSide from '../../RightSide/RightSide';

const Read_Curriculum = () => {


  const [visible, setVisible] = useState(true);
  const [apiData, setApiData] = useState([]);

  const ConfirmDelete = (id) => {

    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure to delete this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => onDelete(id)
        },
        {
          label: 'No',
        }
      ]
    });
  }




  const onDelete = (id) => {
    axios.delete('http://localhost:5000/api/curriculum/delete/' + id)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Curriculum deleted successfully");
          getData();
        }
        else {
          alert("Something went wrong");
        }
      })
  }



  useEffect(() => {
    sessionStorage.setItem("userType", "admin");
    var userType = sessionStorage.getItem("userType");
    if (userType === 'user') {
      setVisible(false);
    }
    else {
      setVisible(true);
    }
    axios.get('http://localhost:5000/api/curriculum/read')
      .then((getData) => {
        setApiData(getData.data);
      })
  }, [])

  const getData = () => {
    axios.get('http://localhost:5000/api/curriculum/read')
      .then((getData) => {
        console.log(getData.data)
        setApiData(getData.data);
      })
  }



  const setData = (id,comments, name,area,institution,category, hours, file,) => {
  localStorage.setItem("ID", id);
  localStorage.setItem("comments", comments);
  localStorage.setItem("name", name);
  localStorage.setItem("area", area);
  localStorage.setItem("institution", institution);
  localStorage.setItem("category", category);
  localStorage.setItem("hours", hours);
  localStorage.setItem("file", file)

   }

  return (
    <div className="App">
    <div className="AppGlass">
 <Sidebar/>
    <section className="Background">

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col ">
            <div className="card card-table" >
              <div className="row g-0">
                <div className="d-flex justify-content-center pt-3">
                  <h1 className="fw-Bolder mb-3 pb-3 headeing" >Curriculum List</h1>
                </div>
                <div>
                  <Table celled padded>
                    <Table.Header>
                      <Table.Row>
                        
                        <Table.HeaderCell>name</Table.HeaderCell>
                        <Table.HeaderCell>area</Table.HeaderCell>
                        <Table.HeaderCell>institution</Table.HeaderCell>
                        <Table.HeaderCell>category</Table.HeaderCell>
                        <Table.HeaderCell>hours</Table.HeaderCell>
                        <Table.HeaderCell>Comments</Table.HeaderCell>
                        <Table.HeaderCell>Approval Status</Table.HeaderCell>
                        <Table.HeaderCell>View</Table.HeaderCell>
                        {visible && <Table.HeaderCell>Edit</Table.HeaderCell>}
                        {visible && <Table.HeaderCell>Delete</Table.HeaderCell>}
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>

                      {apiData.map(data => {
                        return (
                          <Table.Row key={data._id}>

                           
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.area}</Table.Cell>
                            <Table.Cell>{data.institution}</Table.Cell>
                            <Table.Cell>{data.category}</Table.Cell>
                            <Table.Cell>{data.hours}</Table.Cell>
                            <Table.Cell>{data.comments}</Table.Cell>
                            <Table.Cell>{data.isApproved?"Approved":"Pending"}</Table.Cell>
                         <Table.Cell>
                            <Link to='/curriculums/ReadOne'>
                              <Button className="btn btn-secondary btn-md" onClick={() => setData(data._id, data.comments,  data.name, data.area, data.institution,  data.category, data.hours,data.file)}>View</Button>
                              </Link >
                              </Table.Cell>
                            {!data.isApproved &&
                              <Table.Cell>
                                <Link to='/curriculums/update'>
                                  <Button className="btn btn-secondary btn-md" onClick={() => setData(data._id, data.comments, data.file)}>Edit</Button>
                                </Link>

                              </Table.Cell>}
                            {visible &&
                              <Table.Cell>

                                <Button className="btn btn-secondary btn-md" onClick={() => ConfirmDelete(data._id)}>Delete</Button>

                              </Table.Cell>}
                          </Table.Row>
                        )

                      })}

                    </Table.Body>

                  </Table>
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

export default Read_Curriculum