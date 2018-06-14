import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar';
import ContinueButton from './continueButton'

class AppointmentCalendar extends Component{
  constructor(props){
    super(props)

    this.state = {
      selectedDate: '',
      continueButton: false,
      startingDate: null,
      screenHeight: 0,
      screenWidth: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.dateSelect = this.dateSelect.bind(this)
  }

  componentDidMount(){
    this.updateWindowDimensions();
    this.setCurrentDate();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  setCurrentDate() {
    let today = new Date()
    this.setState({
      startingDate:  new Date(today.getFullYear(), today.getMonth(), (today.getDate() + 2))
    })
  }

  updateWindowDimensions() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight - 187
    })
  }

  dateSelect(e){
    this.setState({
      continueButton: true,
      selectedDate: e
    })
  }

  render(){
    return (
      <div>
        <InfiniteCalendar
        onSelect={this.dateSelect}
        width={this.state.screenWidth}
        height={this.state.screenHeight}
        selected={this.state.startingDate}
        minDate={this.state.startingDate}
        />
        {this.state.continueButton ?
          <ContinueButton /> :
          ''
        }
      </div>
    )
  }
}

export default AppointmentCalendar
