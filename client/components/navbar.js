import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Responsive} from 'semantic-ui-react'


const Navbar = ({ handleClick, isLoggedIn }) => {
  
  return(
    <div>
      <Responsive minWidth={750} >
        <p>Desktop</p>
      </Responsive>
      <Responsive maxWidth={750} >
        <p>Mobile</p>
      </Responsive>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
