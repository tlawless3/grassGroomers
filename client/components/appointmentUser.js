import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUserServices} from '../store/services'


class AppointmentUser extends Component {
  constructor(props){
      super(props)
  }

  componentDidMount(){
    this.props.fetchAppointments(this.props.user.id)
  }

  render(){
    return (
      <div>
        {this.props.services.map(service => (
          <div>
            <p>{service.type}</p>
            <p>{service.date}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = ({ user, services }) => ({ user, services })

const mapDispatch = (dispatch) => ({
  fetchAppointments(userId){
    dispatch(fetchUserServices(userId))
  }
})

export default connect (mapState, mapDispatch) (AppointmentUser)
