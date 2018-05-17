import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavbarMobile = ({
  isLoggedIn,
  handleItemClick
}) => {

  return (
    <div>
      {isLoggedIn ? (
        <Menu>
            <Dropdown item text='Menu'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/' name='home' onClick={handleItemClick}>Home</Dropdown.Item>
                <Dropdown.Item name='schedule' onClick={handleItemClick}>Appointments</Dropdown.Item>
                //name has to be home for the handleItemClick function
                <Dropdown.Item as={Link} to='/' name='home' onClick={handleItemClick}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu>
      ) :
      (
        <Menu>
            <Dropdown item text='Menu'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/' name='home' onClick={handleItemClick}>Home</Dropdown.Item>
                <Dropdown.Item as={Link} to='/login' name='login' onClick={handleItemClick}>Log In</Dropdown.Item>
                <Dropdown.Item as={Link} to='/signup' name='signUp' onClick={handleItemClick}>Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu>
      )}
    </div>
  )
}

export default NavbarMobile
