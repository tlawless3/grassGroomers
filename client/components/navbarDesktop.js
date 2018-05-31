import React from 'react'
import {Menu} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavbarDesktop = ({
  activeItem,
  isLoggedIn,
  handleItemClick,
  logoutOnClick
}) => {
  return (
    <div>
      {isLoggedIn ? (
      <Menu size='small'>
        <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={handleItemClick} />
        <Menu.Item as={Link} to='/appointmentsHome' name='appointments' active={activeItem === 'appointments'} onClick={handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item as={Link} active={activeItem === 'settings'} to='/' name='settings' onClick={handleItemClick} />
          <Menu.Item as={Link} onClick={logoutOnClick} to='/' name='Log Out' />
        </Menu.Menu>
      </Menu>
      ) :
      (
        <Menu>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/login' name='login' active={activeItem === 'login'} onClick={handleItemClick} />
            <Menu.Item as={Link} to='/signup' name='signUp' active={activeItem === 'signUp'} onClick={handleItemClick} />
          </Menu.Menu>
        </Menu>
      )}
    </div>
  )
}

export default NavbarDesktop
