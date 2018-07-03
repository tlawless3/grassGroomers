import React from 'react'
import { Dropdown, Form, Button } from 'semantic-ui-react'

const ApptModal = ({
  date
}) => {
  const options = [
    {
      text: 'Mowing',
      value: 'mowing'
    },
    {
      text: 'Shovelling',
      value: 'shovelling'
    }
  ]
  const parseDate = (time) =>{
    time = time.split(' ')
    let result = time.slice(0, 4)
    result = result.join(' ')
    return (result)
  }
  return (
    <div id='apptModal'>
      <p>'Scheduling an Appointment on:'{parseDate(date)}</p>
      <Form>
        <Dropdown placeholder='Select Service' fluid selection options={options} />
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default ApptModal
