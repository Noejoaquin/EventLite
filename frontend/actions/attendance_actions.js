import * as AttendanceApiUtil from '../util/attendance_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'


export const recieveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const createAttendance = (eventId) => dispatch => {
  debugger
  return AttendanceApiUtil.createAttendance(eventId)
                          .then((currentUser) => {
                             debugger
                             dispatch(recieveCurrentUser(currentUser))
                          })
}

export const deleteAttendance = (eventId) => dispatch => {
  return AttendanceApiUtil.deleteAttendance(eventId)
                          .then((currentUser) => dispatch(recieveCurrentUser(currentUser)))
}
