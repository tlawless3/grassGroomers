import React, {Component} from 'react'
import {Button, Form, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'

class Signup extends Component{
  constructor(){
    super()

    this.state={
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      streetAddress: '',
      city: '',
      state: '',
      password: '',
      zipcode: '',
      confirmPassword: '',
      error: false,
      errorMessage: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleSubmit(){
    this.validate().then(()=>{
      if (!this.state.error){
        console.log('submitted')
      } else {
        console.log('rejected')
      }
    })
  }

  async validate(){
    let message = '';
    let emailRegEx = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if(!this.state.firstName || !this.state.lastName){
      message += 'Enter a full name, '
    }
    if(!this.state.email || !emailRegEx.test(this.state.email)){
      message += 'Enter a valid E-Mail, '
    }
    if(!this.state.streetAddress || !this.state.city || !this.state.state || !this.state.zipcode){
      message += 'Enter an address, '
    }
    if(!this.state.password || !this.state.confirmPassword){
      message += 'Eneter a password, '
    }
    if(this.state.password !== this.state.confirmPassword){
      message += 'Passwords do not match, '
    }
    if(message){
      this.setState({
        error: true,
        errorMessage: message
      })
    } else{
      this.setState({
        error: false
      })
    }
  }

  handleChange(e, {name, value}){
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div id='signupForm'>
        <Form error={this.state.error} onSubmit={this.handleSubmit}>
          <Message
            error
            Header='Error'
            content={this.state.errorMessage}
          />
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='First name' name='firstName' placeholder='First name' />
            <Form.Input onChange={this.handleChange} fluid label='Last name' name='lastName' placeholder='Last name' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='E-Mail' name='email' placeholder='E-Mail' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Phone Number' name='phone' placeholder='Phone Number' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Street Address' name='streetAddress' placeholder='Street Address' />
            <Form.Input onChange={this.handleChange} fluid label='Zipcode' name='zipcode' placeholder='Zipcode' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='City' name='city' placeholder='City' />
            <Form.Input onChange={this.handleChange} fluid label='State' name='state' placeholder='State' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Password' name='password' placeholder='Password' />
            <Form.Input onChange={this.handleChange} fluid label='Confirm Password' name='confirmPassword' placeholder='Confirm Password' />
          </Form.Group>
          <Form.Button content='Submit' />
        </Form>
      </div>
    )
  }
}

const mapState = ({ user }) => ({ user })

const mapDispatchSignup = (dispatch) =>{
    return null
}

const mapDispatchChange = (dispatch) =>{
    return null
}

export const SignupInfo = connect(mapState, mapDispatchSignup)(Signup)
export const ChangeInfo = connect(mapState, mapDispatchChange)(Signup)
