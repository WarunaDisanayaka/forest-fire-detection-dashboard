import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../App.css';
import '../index.css';
import cloud from '../images/Cloud.png';

export default function NavBar() {
  return (
    <>
      <Nav as='h4' className='mt-0 pt-5' variant='tabs' defaultActiveKey='/'>
        <Nav.Item className=''>
          <Nav.Link as={NavLink} to={'/'}>
            Home
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
