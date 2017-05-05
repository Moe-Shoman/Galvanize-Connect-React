import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav, MenuItem, NavItem} from 'react-bootstrap';

class SideNav extends Component {

  render() {
    return (


        // <div>
        //  <ul className='navbar-ul'>
        //    <li className='navbar-li'><Link to='/' >Login</Link></li>
        //    <li className='navbar-li'><Link to='/Home' >Home</Link></li>
        //    <li className='navbar-li'><Link to='/Cohort' >Cohort</Link></li>
        //    <li className='navbar-li'><Link to='/Profile' >Profile</Link></li>
        //  </ul>
        // </div>
       <div class="navbar-fixed-left">
        <Navbar inverse collapseOnSelect>
         <Navbar.Header>
          <Navbar.Brand>
           <Link to='/' >Home</Link>
          </Navbar.Brand>
         </Navbar.Header>
         <Nav>
          <NavItem> <Link to='/Cohort' >Cohort</Link></NavItem>
          <NavItem> <Link to='/Profile' >Profile</Link></NavItem>
          <NavItem> <Link to='/Login' >Login</Link></NavItem>
         </Nav>
        </Navbar>
       </div>
    )
  }
}

// export default SideNav;
