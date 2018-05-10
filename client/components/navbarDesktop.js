import React from 'react'
import {Menu} from 'semantic-ui-react'

const NavbarDesktop = ({
  activeItem,
  isLoggedIn,
  handleItemClick
}) => {
  return (
    <div>
      {isLoggedIn ? (
      <Menu size='small'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
        <Menu.Item name='appointments' active={activeItem === 'appointments'} onClick={handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item name='Log Out' />
        </Menu.Menu>
      </Menu>
      ) :
      (
        <Menu>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={handleItemClick} />
            <Menu.Item name='signUp' active={activeItem === 'signUp'} onClick={handleItemClick} />
          </Menu.Menu>
        </Menu>
      )}
    </div>
  )
}

export default NavbarDesktop
