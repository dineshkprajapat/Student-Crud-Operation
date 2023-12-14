import { NavLink as ReactLink } from "react-router-dom";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
const CustomNavbar= ()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return(
    <div>
      <Navbar
      className="navbar"
      color='info'
      expand='md'
      fixed=''>
   
       <Nav navbar>
        <NavItem>
        <NavLink className="navbarbrand" tag={ReactLink} to="/"> Home </NavLink>
          </NavItem>
          </Nav>     
        <NavbarToggler />
        <Collapse  navbar >
          <Nav  className="navv" navbar>
            <NavItem className="navitem">
              <NavLink className='link' tag={ReactLink} to="/about"> Product </NavLink>
            </NavItem>
            <NavItem  className="navitem" >
              <NavLink className='link'tag={ReactLink} to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            <NavItem  className="navitem">
              <NavLink className='link'tag={ReactLink} to="/login">
                Login
              </NavLink>
              </NavItem>
            <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle className='link' nav caret>
                More
              </DropdownToggle>
              <DropdownMenu className="dropmenu" right>
                <DropdownItem className="dropitem">Conatct</DropdownItem>
                <DropdownItem className="dropitem">Email</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="dropitem" tag={ReactLink} to="/editprofile">Edit Profile </DropdownItem>
                <DropdownItem className="dropitem" tag={ReactLink} to="/changepassword">Change Password </DropdownItem>
                <DropdownItem className="dropitem" tag={ReactLink} to="/login">Log Out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        
          </Nav>
           <Nav navbar>
            <NavItem>
            <NavLink  style={{fontSize:"26px",}} tag={ReactLink} to="" navbar> E -Commerce </NavLink>
            </NavItem>
           </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
  
}

export default CustomNavbar;