import React, { Component } from 'react'

class Carousel extends Component{
  constructor(){
    super()
    this.state={
      imageCounter: 0,
      intervalId: ''
    }
  }

  render(){
    const images =[
    'assets/carouselImage1.jpg',
    'assets/carouselImage2.jpg',
    'assets/carouselImage3.jpg',
    'public/assets/carouselImage4.jpg'
    ]
    return(
      <div>
        <img src={images[this.state.imageCounter]} />
      </div>
    )
  }
}

export default Carousel
