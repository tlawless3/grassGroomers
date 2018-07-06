import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar';
import ContinueButton from './continueButton'
import ApptModal from './apptModal'
import {connect} from 'react-redux'
import { createService } from '../store/services'

class AppointmentCalendar extends Component{
  constructor(props){
    super(props)

    this.state = {
      selectedDate: '',
      serviceType: null,
      continueButton: false,
      modal: false,
      startingDate: null,
      maxDate: null,
      screenHeight: 0,
      screenWidth: 0,
      error: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.dateSelect = this.dateSelect.bind(this)
    this.continueClick = this.continueClick.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.setService = this.setService.bind(this)
    this.submitAppt = this.submitAppt.bind(this)
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
      selectedDate: e + ''
    })
  }

  continueClick(){
    this.setState({
      continueButton: false,
      modal: true
    })
  }

  closeModal(){
    this.setState({
      modal: false,
      continueButton: true,
      serviceType: null
    })
  }

  submitAppt(){
    if (this.state.serviceType){
      console.log(this.props)
      this.props.submitAppt({
        type: this.state.serviceType,
        date: this.state.selectedDate,
        location: this.props.user.address,
      }, this.props.user.id)
      this.closeModal()
      this.props.history.push('/appointmentUser')
    } else {
      this.setState({
        errorStatus: true
      })
    }
  }

  setService(unknown, target){
    this.setState({
      serviceType: target.value,
      errorStatus: false
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
          <ContinueButton continueClick={this.continueClick} /> :
          ''
        }
        {this.state.modal ?
          <ApptModal
            closeModal={this.closeModal} submitAppt={this.submitAppt}
            setService={this.setService} date={this.state.selectedDate}
            errorStatus={this.state.errorStatus}
          /> :
          ''
        }
      </div>
    )
  }
}

const mapState = ({ user }) => ({ user })

const mapDispatch = (dispatch) => ({
  submitAppt(data, id){
    dispatch(createService(data, id))
  }
})

export default connect (mapState, mapDispatch) (AppointmentCalendar)
