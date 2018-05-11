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
        <img src={this.state.images[this.state.imageCounter]} />
      </div>
    )
  }
}

export default Carousel
