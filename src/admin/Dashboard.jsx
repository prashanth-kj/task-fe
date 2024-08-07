import React, { useEffect, useState } from 'react'
import AxiosService from '../utils/Apiservice'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function Dashboard() {

      let [users,setUsers]=useState([])
      let [userActiveCount,setActiveCount]=useState();
      let [totalTaskCount, setTaskCount]=useState()
      let navigate= useNavigate();


     let getUsers= async()=>{
           try {
              let res= await AxiosService.get('/admin');
                 if(res.status==200){
                      setUsers(res.data.getAllusers)
                 }
           } catch (error) {
            console.log(error)
           }
     }

     let handleDelete= async(id)=>{
           try {
               let res= await AxiosService.delete(`/admin/${id}`)
                 if(res.status==200){
                     getUsers() 
                 }
           } catch (error) {
              console.log(error);
           }
     }
      
     let getdashboardState=async()=>{
           let res= await AxiosService.get('/dashboard/state')
            setActiveCount(res.data.activeUserCount)
            setTaskCount(res.data.totalTaskCount)
     }
    useEffect(()=>{
          getUsers()
    },[])

    useEffect(()=>{
        getdashboardState()
     },[users.length])

  return<>
       <div className='container'>
        <div className='d-flex justify-content-between mt-3'>
            <h2>Total Task Count: {totalTaskCount}</h2>
            <h2>Active User Count: {userActiveCount}</h2>
        </div>        
       <Button variant="primary" className='mt-5 mb-5 button-item' onClick={()=>navigate(`/create-user`)}>Add User</Button> 
        
       
             
        <div className='mb-5'>
           <div className='text-center'>
              <h2>User List</h2>
              <hr />
           </div>
        <Table striped bordered hover responsive>
                <thead>
                        <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>role</th>
                        <th>Status</th>
                        <th>others</th>
                        </tr>
                </thead>
                    <tbody>
                        {
                          users.map((e,i)=>{
                            return <tr key={i}>
                                  <td>{i+1}</td>
                                  <td>{e.name}</td>
                                  <td>{e.email}</td>
                                  <td>{e.role}</td>
                                  <td>{e.status}</td>
                                  <td>
                                  <Button variant="primary" onClick={()=>navigate(`/edit/${e._id}`)}>edit</Button> &nbsp;&nbsp;
                                  <Button variant="danger" onClick={()=>handleDelete(e._id)}>delete</Button>
                                  </td>
                            </tr>
                          })
                        }
                    </tbody>
            </Table>
            
        </div>     
  
       </div>
  </>
}

export default Dashboard