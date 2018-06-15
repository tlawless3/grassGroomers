import React from 'react'
import {Button} from 'semantic-ui-react'

const ContinueButton = ({
  continueClick
}) => {
  return (
    <div id='continueButton'>
      <Button onClick={continueClick} size='massive' color='green'>Continue</Button>
    </div>
  )
}

export default ContinueButton
