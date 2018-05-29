import React, {Component} from 'react'
import {Button, Form, Message} from 'semantic-ui-react'
import {connect} from 'react-redux'
import { auth } from '../store/user'

class Login extends Component{
  constructor(){
    super()

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      error: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(){
    this.props.login(this.state.email, this.state.password)
    if (!this.props.user.id){
      this.setState({
        errorMessage: 'Invalid Login',
        error: true
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
      <div id='loginForm'>
        <p id='signupFormTitle'>Log In</p>
        <Form error={this.state.error} onSubmit={this.handleSubmit}>
          <Message
            error
            header='Error: '
            content={this.state.errorMessage}
          />
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='E-Mail' name='email' placeholder='E-Mail' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange} fluid label='Password' type='password' name='password' placeholder='password' />
          </Form.Group>
          <Form.Button content='Submit' />
        </Form>
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user
})

const mapDispatch = (dispatch) => ({
    login(email, password){
      dispatch(auth(email, password, 'login'))
    },
})

export default connect (mapState, mapDispatch)(Login)
