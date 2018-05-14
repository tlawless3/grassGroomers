import React from 'react'

const CarouselButtons = ({
  imageArray,
  jumpToImage,
  imageCounter
}) => {

  return (
    <div id='buttonContainer'>
      {imageArray.map((image, index) => (
          <div className='carouselButton' id={index === imageCounter ? 'fillCarouselButton' : ''} onClick={() => jumpToImage(index)} key={index}>
          </div>
        )
      )}
    </div>
  )
}

export default CarouselButtons
