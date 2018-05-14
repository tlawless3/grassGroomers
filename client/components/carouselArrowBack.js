import React from 'react'
import {Icon} from 'semantic-ui-react'

const CarouselArrowBack = ({
  reverseImage
}) => {
  return (
    <div className='arrow' onClick={reverseImage}>
      <Icon name='chevron left' size='big' />
    </div>
  )
}

export default CarouselArrowBack
