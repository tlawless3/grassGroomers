import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_ALL_SERVICES = 'SET_ALL_SERVICES'
const SET_USER_SERVICES = 'SET_USER_SERVICES'
const ADD_SERVICE = 'ADD_SERVICE'

/**
 * INITIAL STATE
 */
const services = []

/**
 * ACTION CREATORS
 */
const setAllServices = services => ({type: SET_ALL_SERVICES, services})
const setUserServices = services => ({type: SET_USER_SERVICES, services})
const addService = services => ({type: ADD_SERVICE, services})

/**
 * THUNK CREATORS
 */
  export const fetchServices = () =>
   dispatch => {
     axios.get(`/api/services`)
       .then(res => {
         dispatch(setAllServices(res.data || services))
       })
       .catch(err => console.log('error fetching services', err));
    };

  export const fetchUserServices = (userId) =>
    dispatch => {
      axios.get(`/api/services/${userId}`)
        .then(res => {
          dispatch(setUserServices(res.data || services))
        })
        .catch(err => console.log('error fetching user services', err))
    }

  export const  createService = (data, userId) =>
    dispatch => {
      data.userId = userId
      axios.post(`api/services`, data)
        .then(res => {
          dispatch(addService(res.data || services))
        })
        .catch(err => console.log('error creating appointment', err))
    }

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case SET_USER_SERVICES:
      return action.services
    case SET_ALL_SERVICES:
      return action.services
    case ADD_SERVICE:
      return [...services, action.services]
    default:
      return state
  }
}
