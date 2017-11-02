import * as SaveApiUtil from '../util/save_util';



export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

export const recieveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})



export const createSave = (eventId) => dispatch => {
  return SaveApiUtil.createSave(eventId)
                    .then((currentUser) => {
                      dispatch(recieveCurrentUser(currentUser))
                    })
}


export const deleteSave = (eventId) => dispatch => {
  return SaveApiUtil.deleteSave(eventId)
                    .then((currentUser) => dispatch(recieveCurrentUser(currentUser)))
}
