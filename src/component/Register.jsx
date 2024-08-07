import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AxiosService from '../utils/Apiservice';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { SiTask } from "react-icons/si";

function Register() {

      let [name,setName]=useState('');
      let [email,setEmail]=useState('');
      let [password,setPassword]=useState('')
      let [loading,setLoading]=useState(false)
      let navigate=useNavigate();

        let handleCreate=async()=>{
                try {
                     setLoading(true)
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
                }finally{
                      setLoading(false)
                }
        }
  return <>
       <div className='container' style={{height:'100vh'}}>
         <div className='d-flex justify-content-center align-items-center' style={{height:'100%'}}>
            <div className='container-fluid shadow p-4 rounded-5' style={{maxWidth:'400px'}}>
                 <div>
                     <h3 className='text-center' style={{fontFamily:"sans-serif",color:'darkgreen'}}> <SiTask size={"24px"} className='mb-1 mx-1' /> Task Management App</h3>
                 </div>
                    <Form>
                        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
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

                        <Button style={{backgroundColor:'darkseagreen' , color:'black', border:'1px solid darkseagreen'}} className='w-100 mt-3 mb-3' onClick={()=>handleCreate()}>
                            {
                                loading ? <Spinner animation='border' size='sm' ></Spinner> : 'Register'
                            }
                        </Button>
                    </Form> 
            </div>
         </div>
     </div>
  </>
}

export default Register