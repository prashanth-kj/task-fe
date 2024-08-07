import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/Apiservice';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
function Task() {
       
      let [tasks,setTasks]=useState([])
     let navigate=useNavigate();

       let getTask= async()=>{

             try {
                  let res= await AxiosService.get('/admin/tasks')
                    setTasks(res.data.getTasks)
             } catch (error) {
                console.log(error);
             }
       }   

    useEffect(()=>{
          getTask()
    },[])
  return<>
   <div className='container'>
         <div className='container-fluid'>
         <div className='text-center mt-3'>
             <h2>Manage User Task!...</h2>
             <hr />
         </div>
         
         <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           {
              tasks.map((e,i)=>{
                 return <tr onClick={()=>navigate(`/task/${e._id}`)}>
                      <td>{i+1}</td>
                      <td>{e.title}</td>
                      <td>{e.description}</td>
                      <td>{e.status}</td>
                 </tr>
              })
           }
          </tbody>
        </Table>
         </div>
   </div>
  </>
}

export default Task