import React from 'react'
import {Icon} from 'semantic-ui-react'

const carouselArrowForward = ({
  advanceImage
}) => {

  return (
    <div className='arrow' onClick={advanceImage}>
      <Icon name='chevron right' size='big' />
    </div>
  )
}

export default carouselArrowForward
