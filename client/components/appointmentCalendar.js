import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar';
import ContinueButton from './continueButton'
import ApptModal from './apptModal'

class AppointmentCalendar extends Component{
  constructor(props){
    super(props)

    this.state = {
      selectedDate: '',
      continueButton: false,
      modal: false,
      startingDate: null,
      maxDate: null,
      screenHeight: 0,
      screenWidth: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.dateSelect = this.dateSelect.bind(this)
    this.continueClick = this.continueClick.bind(this)
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
      startingDate:  new Date(today.getFullYear(), today.getMonth(), (today.getDate() + 2)),
      maxDate: new Date(today.getFullYear(), (today.getMonth() + 2), (today.getDate()))
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
      selectedDate: '' + e
    })
  }

  continueClick(){
    this.setState({
      continueButton: false,
      modal: true
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
        maxDate={this.state.maxDate}
        disabledDays={this.state.modal ? [0, 1, 2, 3, 4, 5, 6] : ''}
        />
        {this.state.continueButton ?
          <ContinueButton continueClick={this.continueClick}/> :
          ''
        }
        {this.state.modal ?
          <ApptModal date={this.state.selectedDate} /> :
          ''
        }
      </div>
    )
  }
}

export default AppointmentCalendar
