import React from 'react'
import {Button} from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const AppointmentCalendar = () => {
  var today = new Date();
  var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  return (
    <div>
      <InfiniteCalendar
      width={400}
      height={600}
      selected={today}
      disabledDays={[0,6]}
      minDate={lastWeek}
      />
    </div>
  )
}

export default AppointmentCalendar
