import React, { useEffect } from 'react'
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl
} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {logout} from '../../actions/userActions'
const Header=({setSearch}) =>{
  const dispatch=useDispatch()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigate=useNavigate()
  const logoutaction=()=>{
    dispatch(logout())
    navigate('/')
  }
  useEffect(() => {}, [userInfo]);
  return (
    <Navbar bg="primary" expand="lg" variant="light">
    <Container>
      <Navbar.Brand >
      <Link to='/' style={{color: "black"}}>Note Zipper</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="m-auto">
         <Form  className="d-flex">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(e)=>setSearch(e.target.value)}
            />
          
          </Form>
         </Nav>
        <Nav >
          <Nav.Link >
          <Link to='/mynotes' style={{color: "black"}}>My Notes</Link>
          </Nav.Link>
         
          <NavDropdown title={`${userInfo.name}`} id="basic-nav-dropdown">
            {/* <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item> */}
            
           
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutaction}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
     
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
