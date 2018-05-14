import React from 'react'

const CarouselButtons = ({
  imageArray,
  jumpToImage
}) => {

  return (
    <div>
      {imageArray.map((image, index) => (
          <div className='button' onClick={() => jumpToImage(index)} key={index}>
          </div>
        )
      )}
    </div>
  )
}

export default CarouselButtons
