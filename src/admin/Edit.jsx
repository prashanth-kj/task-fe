import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AxiosService from '../utils/Apiservice'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Edit() {
    let params=useParams()
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let [role,setRole]=useState('')
  
    let navigate=useNavigate();
    let getUser=async()=>{
            try {
             
                let res=await AxiosService.get(`/admin/${params.id}`)
                if(res.status==200){
                      setName(res.data.user.name)
                      setEmail(res.data.user.email)
                      setPassword(res.data.user.password)
                      setRole(res.data.user.role)
                }
            } catch (error) {
                console.log(error);
            }
    }

       let handleEdit=async()=>{
              try {
                  let res= await AxiosService.put(`/admin/edit/${params.id}`,{
                      name,
                      email,
                      password,
                      role
                  });

                 if(res.status==200){
                       navigate('/dashboard')
                 }
              } catch (error) {
                  console.log(error);
              }
       }
    useEffect(()=>{
          if(params.id){
              getUser()
          }
    },[])
  return <>
      <div className='container'>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Name</Form.Label>
                <Form.Control type="text" className="form-control" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control type="email" className="form-control" value={email} placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control type="text" className="form-control" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Role</Form.Label>
                <Form.Control type="text" className="form-control" value={role} placeholder="Enter your role" onChange={(e)=>setRole(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" className='w-100' onClick={()=>handleEdit()}>edit</Button>
        </Form>
     </div>
  </>
}

export default Edit