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
             <div className='container-fluid'>
                     <div className='text-center mt-3 mb-4'>
                         <h2>Create your Tasks!</h2>
                         <hr />
                     </div>
                    <div style={{backgroundColor:'mintcream' , padding:'30px' , borderRadius:'20px'}}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="form-label">Title</Form.Label>
                                <Form.Control type="text" className="form-control" placeholder="enter Title"  onChange={(e)=>setTitle(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="form-label">Description</Form.Label>
                                <Form.Control as="textarea" className="form-control" placeholder="Enter description" rows={3} onChange={(e)=>setDescription(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" className='w-100 button-items ' onClick={()=>handleTask()}>Create task</Button>
                        </Form>
                    </div>
             </div>
         </div>
  
  </>
}

export default CreateTask