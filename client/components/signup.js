import React, {Component} from 'react'
import {Button, Form} from 'semantic-ui-react'

class Signup extends Component{
  constructor(){
    super()
    this.state={
      firstName: '',
      lastName: '',
      eMail: '',
      phone: '',
      streetAddress: '',
      city: '',
      state: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit(){
    console.log('hello')
  }

  render(){
    return(
      <div id='signupForm'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' />
            <Form.Input fluid label='Last name' placeholder='Last name' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='E-Mail' placeholder='E-Mail' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Phone Number' placeholder='Phone Number' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Street Address' placeholder='Street Address' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='City' placeholder='City' />
            <Form.Input fluid label='State' placeholder='State' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Password' placeholder='Password' />
            <Form.Input fluid label='Confirm Password' placeholder='Confirm Password' />
          </Form.Group>
          <Form.Button content='Submit' />
        </Form>
      </div>
    )
  }
}

export default Signup
