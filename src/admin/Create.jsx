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
                <Form.Control type="text" className="form-control"  placeholder="Enter your role" onChange={(e)=>setRole(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" className='w-100' onClick={()=>handleCreate()}>Add User</Button>
        </Form>
     </div>
  </>
}

export default Create