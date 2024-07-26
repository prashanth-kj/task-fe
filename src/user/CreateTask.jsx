import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/Apiservice';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';
function CreateTask() {

    let [title,setTitle]=useState('');
    let [description,setDescription]=useState('')
 
    let navigate=useNavigate();

      let handleTask=async()=>{
            try {
                let res= await AxiosService.post('/tasks/create',{
                     title,
                     description
                })

                if(res.status==201){
                      navigate('/home')
                }
            } catch (error) {
                console.log(error);
            }
      }
  return <>
         <div className='container'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="form-label">Title</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="enter Title"  onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="form-label">description</Form.Label>
                    <Form.Control type="text" className="form-control" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" className='w-100' onClick={()=>handleTask()}>Create task</Button>
            </Form>
         </div>
  
  </>
}

export default CreateTask