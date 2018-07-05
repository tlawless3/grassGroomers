import React from 'react'
import { Dropdown, Form, Button, Icon } from 'semantic-ui-react'

const ApptModal = ({
  date,
  closeModal
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
    console.log(result)
    return (result)
  }
  return (
    <div id='apptModal'>
      <div id='exitButtonWrapper'>
        <Button icon onClick={closeModal}>
          <Icon name='close'/>
        </Button>
      </div>
      <div id='modalText'>
        <p>Scheduling an Appointment on</p>
        <p>{parseDate(date)}</p>
      </div>
      <div id='modalMenu'>
        <Form>
          <Dropdown placeholder='Select Service' selection options={options} />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default ApptModal
