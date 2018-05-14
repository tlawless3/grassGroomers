import React, { Component } from 'react'
import CarouselArrowBack from './carouselArrowBack'
import CarouselArrowForward from './carouselArrowForward'
import CarouselButtons from './carouselButtons'

class Carousel extends Component{
  constructor(){
    super()
    this.state={
      imageCounter: 0,
      intervalId: '',
      images: [
      'assets/carouselImage1.jpg',
      'assets/carouselImage2.jpg',
      'assets/carouselImage3.jpg',
      'assets/carouselImage4.jpg'
      ]
    }
    this.reverseImage = this.reverseImage.bind(this)
    this.advanceImage = this.reverseImage.bind(this)
    this.jumpToImage = this.jumpToImage.bind(this)
  }

  componentDidMount(){
    this.startLoop()
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }

  startLoop(){
    const loopId = setInterval(() => {this.loopImages()}, 2000)
    this.setState({
      intervalId: loopId
    })
  }

  jumpToImage(index){
    clearInterval(this.state.intervalId)
    this.setState({
      imageCounter: index
    })
    this.startLoop()
  }

  reverseImage(){
    clearInterval(this.state.intervalId)
    let count = this.state.imageCounter;
    if(count === 0){
      count = this.state.images.length - 1;
    } else{
      count--
    }
    this.startLoop()
    this.setState({
      imageCounter: count
    })
  }

  advanceImage(){
    clearInterval(this.state.intervalId)
    let count = this.state.imageCounter;
    if(count >= this.state.images.length - 1){
      count = 0;
    } else{
      count++
    }
    this.startLoop()
    this.setState({
      imageCounter: count
    })
  }

  loopImages(){
    let count = this.state.imageCounter;
    if(count >= this.state.images.length - 1){
      count = 0;
    } else{
      count++
    }
    this.setState({
      imageCounter: count
    })
  }

  render(){
    return(
      <div>
        <CarouselArrowBack reverseImage={this.reverseImage} />
        <div>
          <img id='carouselImage' src={this.state.images[this.state.imageCounter]} />
        </div>
        <CarouselArrowForward advanceImage={this.advanceImage} />
        <CarouselButtons imageArray={this.state.images} jumpToImage={this.jumpToImage} />
      </div>
    )
  }
}

export default Carousel
