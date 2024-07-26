import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/Apiservice';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';
function Home() {
     

       let [task,setTask]=useState([]);
      
       let navigate=useNavigate();

     let  getTasks=async()=>{
           try {
               let res =await  AxiosService.get('/tasks/user');
                 setTask(res.data.tasks)
           } catch (error) {
              console.log(error);
           }
      }

       
    useEffect(()=>{
         getTasks()
    },[])
   
  return <>
    <div className='container'>
        <h1 className='text-center'>TaskList</h1>
        <hr />
        <Button variant="primary" className='mb-5 mt-5' onClick={()=>navigate('/create-task')}>Add Task</Button>
         <div>
             
         </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
         {
            task.map((e,i)=>{
                 return  <tr key={i}>
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
  </>
}

export default Home