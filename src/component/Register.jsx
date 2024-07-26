import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AxiosService from '../utils/Apiservice';
import { useNavigate } from 'react-router-dom';

function Register() {

      let [name,setName]=useState('');
      let [email,setEmail]=useState('');
      let [password,setPassword]=useState('')
      let navigate=useNavigate();

        let handleCreate=async()=>{
                try {
                    let res=await AxiosService.post('/user/register',{
                       name,
                       email,
                       password
                    })
                    if(res.status==201){
                         navigate('/login')
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
                <Form.Control type="text" className="form-control" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control type="email" className="form-control" placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" className='w-100' onClick={()=>handleCreate()}>Register</Button>
        </Form>
     </div>
  </>
}

export default Register