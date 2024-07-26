import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useLogout from '../Hooks/useLogout';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Header() {
     let userData=JSON.parse(sessionStorage.getItem('userData'))
      
     let [role,setRole]=useState('');


     useEffect(()=>{
           if(!userData){
                 logout()
           }else{
               setRole(userData.role)
           }
     },[])

     let logout= useLogout();
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-items">
              {
                  role==="admin"?<><AdminNavLinks/></>: <><UserNavLinks/> </>
                
              }
          </Nav>
          <Nav>
                <Nav.Item><h4>{ `${userData.name}`}</h4></Nav.Item>
                &nbsp; &nbsp;
                <Nav.Item  onClick={logout}><Button variant='danger'>Logout</Button></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


function AdminNavLinks (){
    let navigate=useNavigate()

    return <>
            <Nav onClick={()=> navigate('/dashboard')}>dashboard</Nav>
            <Nav onClick={()=>navigate('/taskarea')}>TaskArea</Nav>    
    </>
}

function UserNavLinks (){
let navigate= useNavigate()

return <>
        <Nav onClick={()=> navigate('/home')}>Home</Nav>
       
  </>
}
export default Header