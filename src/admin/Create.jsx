import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AxiosService from '../utils/Apiservice';
import { useNavigate } from 'react-router-dom';

function Create() {
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [role,setRole]=useState('')

    let navigate=useNavigate()

    let handleCreate=async()=>{
           try {
               let res=await AxiosService.post('/admin/create',{
                  name,
                  email,
                  password,
                  role
               })

               if(res.status==201){
                      navigate('/dashboard')
               }
           } catch (error) {
            console.log(error);
           }
    }
  return <>
     <div className='container'>
         <div className='container-fluid'>
                     <div className='text-center mt-3 mb-4'>
                         <h2>Create your Users!</h2>
                         <hr />
                     </div>
            <div style={{backgroundColor:'mintcream' , padding:'30px' , borderRadius:'20px'}}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Name</Form.Label>
                        <Form.Control type="text" className="form-control"  placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Email address</Form.Label>
                        <Form.Control type="email" className="form-control"  placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Password</Form.Label>
                        <Form.Control type="text" className="form-control" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Role</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e)=>setRole(e.target.value)}>
                            <option>select Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" className='w-100 button-items mt-3' onClick={()=>handleCreate()}>Add User</Button>
                </Form>
            </div>
         </div>           
     </div>
  </>
}

export default Create