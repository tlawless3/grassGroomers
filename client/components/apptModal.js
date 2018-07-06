import React from 'react'
import { Dropdown, Form, Button, Icon, Message } from 'semantic-ui-react'

const ApptModal = ({
  date,
  closeModal,
  setService,
  submitAppt,
  errorStatus
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
      <div id='exitButtonWrapper'>
        <Button icon onClick={closeModal}>
          <Icon name='close'/>
        </Button>
      </div>
      <div id='modalText'>
        <p>Requesting an Appointment on</p>
        <p>{parseDate(date)}</p>
      </div>
      <div id='modalMenu'>
        <Form onSubmit={submitAppt} error={errorStatus}>
          <Message error header='Please Select a Service'/>
          <Dropdown onChange={setService} placeholder='Select Service' selection
            options={options} error={errorStatus}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default ApptModal
