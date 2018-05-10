import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Responsive} from 'semantic-ui-react'
import NavbarDesktop from './navbarDesktop'
import NavbarMobile from './navbarMobile'


class Navbar extends Component{
  constructor(){
    super()
    this.state = {
      visible: false,
      activeItem: 'home'
    }
    
    this.handleMobileClick = this.handleMobileClick.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
  }
  
  handleMobileClick(){
    console.log('hello')
    this.setState({
      visible: !this.state.visible
    })
  }
  
  handleItemClick(e, {name}){
    console.log(name)
    this.setState({
      activeItem: name
    })
  }
  
  render() {
    return(
      <div>
        <Responsive minWidth={751} >
          <NavbarDesktop isLoggedIn={this.props.isLoggedIn} activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
        </Responsive>
        <Responsive maxWidth={750} >
          <NavbarMobile handleItemClick={this.handleItemClick} isLoggedIn={this.props.isLoggedIn} handleMobileClick={this.handleMobileClick} />
        </Responsive>
      </div>
    )
  }
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
