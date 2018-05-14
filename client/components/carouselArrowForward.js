import React from 'react'
import {Icon} from 'semantic-ui-react'

const CarouselArrowForward = ({
  advanceImage
}) => {
  return (
    <div className='arrow' onClick={advanceImage}>
      <Icon inverted name='chevron right' size='big' />
    </div>
  )
}

export default CarouselArrowForward
