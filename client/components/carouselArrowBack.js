import React from 'react'
import {Icon} from 'semantic-ui-react'

const CarouselArrowBack = ({
  reverseImage
}) => {
  return (
    <div className='arrow' onClick={reverseImage}>
      <Icon inverted name='chevron left' size='big' />
    </div>
  )
}

export default CarouselArrowBack
