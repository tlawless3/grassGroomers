import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'

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
                <Dropdown.Item name='home' onClick={handleItemClick}>Home</Dropdown.Item>
                <Dropdown.Item name='schedule' onClick={handleItemClick}>Appointments</Dropdown.Item>
                <Dropdown.Item name='home' onClick={handleItemClick}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu>
      ) :
      (
        <Menu>
            <Dropdown item text='Menu'>
              <Dropdown.Menu>
                <Dropdown.Item name='home' onClick={handleItemClick}>Home</Dropdown.Item>
                <Dropdown.Item name='login' onClick={handleItemClick}>Log In</Dropdown.Item>
                <Dropdown.Item name='signUp' onClick={handleItemClick}>Sign Up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </Menu>
      )}
    </div>
  )
}

export default NavbarMobile
