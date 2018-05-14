import React, { Component } from 'react'

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
  }

  componentDidMount(){
    const loopId = setInterval(() => {this.loopImages()}, 1000)
    this.setState({
      intervalId: loopId
    })
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }

  reverseImage(){
    clearInterval(this.state.intervalId)
    let count = this.state.imageCounter;
    if(count === 0){
      count = this.state.images.length - 1;
    } else{
      count++
    }
    const loopId = setInterval(() => {this.loopImages()}, 1000)
    this.setState({
      intervalId: loopId,
      imageCounter: count
    })
  }

  advanceImage(){
    clearInterval(this.state.intervalId)
    let count = this.state.imageCounter;
    if(count === this.state.images.length - 1){
      count = 0;
    } else{
      count++
    }
    const loopId = setInterval(() => {this.loopImages()}, 1000)
    this.setState({
      intervalId: loopId,
      imageCounter: count
    })
  }

  loopImages(){
    let count = this.state.imageCounter;
    if(count === this.state.images.length - 1){
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
        <div>
          <img id='carouselImage' src={this.state.images[this.state.imageCounter]} />
        </div>
      </div>
    )
  }
}

export default Carousel
