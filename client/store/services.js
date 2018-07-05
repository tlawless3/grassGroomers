import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_ALL_SERVICES = 'SET_ALL_SERVICES'
const SET_USER_SERVICES = 'SET_USER_SERVICES'

/**
 * INITIAL STATE
 */
const userServices = []

/**
 * ACTION CREATORS
 */
const setUserServices = services => ({ type: SET_USER_SERVICES, services})
const setAllServices = services => ({type: SET_ALL_SERVICES, services})

/**
 * THUNK CREATORS
 */

export const fetchUserServices = (userId) =>
 dispatch => {
   axios.get(`/api/services/${userId}`)
     .then(res => {
       dispatch(setUserServices(res.data || userServices))
     })
     .catch(err => console.log('error fetching user services', err));
  };

  export const fetchServices = () =>
   dispatch => {
     axios.get(`/api/services`)
       .then(res => {
         dispatch(setAllServices(res.data || userServices))
       })
       .catch(err => console.log('error fetching services', err));
    };

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case SET_USER_SERVICES:
      return action.services
    case SET_ALL_SERVICES:
      return action.services
    default:
      return state
  }
}
