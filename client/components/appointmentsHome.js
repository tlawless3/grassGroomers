import React from 'react'
import {Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AppointmentsHome = () => {
  return (
    <div id='appointmentHomeContainer'>
      <div className='appointmentHomeButton'>
        <Button className='appointmentHomeButton' as={Link} to='/appointmentUser' fluid>Existing Appointments</Button>
      </div>
      <div className='appointmentHomeButton'>
        <Button  as={Link} to='/appointmentCalendar' fluid>Schedule a Service</Button>
      </div>
    </div>
  )
}

export default AppointmentsHome
