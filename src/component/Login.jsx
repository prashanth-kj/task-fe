import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AxiosService from '../utils/Apiservice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
          
       let [email,setEmail]=useState('');
       let [password,setPassword]=useState('');
       let navigate=useNavigate();
      let handleLogin=async()=>{
             try {
                let res= await AxiosService.post('/user/login',{
                    email,
                    password
                })
                console.log(res)
               if(res.status==201){
                     sessionStorage.setItem('token',res.data.token);
                     sessionStorage.setItem('userData',JSON.stringify(res.data.userData))

                     if(res.data.userData.role=="admin"){
                          navigate('/dashboard')
                     }else{
                          navigate('/home')
                     }
               }
             } catch (error) {
                console.log(error);
             }
      }

  return<>
     <div className='container'>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Email address</Form.Label>
                <Form.Control type="email" className="form-control" placeholder="name@example.com"  onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="form-label">Password</Form.Label>
                <Form.Control type="text" className="form-control" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>
           <Button variant="primary" className='w-100' onClick={()=>handleLogin()}>Login</Button>
        
             <Form.Group className="mb-3 text-center mt-5">
                      <Form.Label>Don't have an Account? <Link to={'/register'} style={{textDecoration:"none"}}>Register</Link></Form.Label>
             </Form.Group>
        </Form>
         
     </div>
  </>
}

export default Login