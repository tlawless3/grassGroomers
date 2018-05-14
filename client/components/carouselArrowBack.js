import React from 'react'
import {Icon} from 'semantic-ui-react'

const carouselArrowBack = ({
  reverseImage
}) => {
  return (
    <div className='arrow' onClick={reverseImage}>
      <Icon name='chevron left' size='big' />
    </div>
  )
}

export default carouselArrowBack
