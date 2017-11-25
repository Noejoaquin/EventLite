import * as EventApiUtil from '../util/event_util';


export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS"
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_QUERY = 'RECEIVE_QUERY';
export const REMOVE_QUERY = 'REMOVE_QUERY';

export const receiveErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
})

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
})

export const removeEvent = (eventId) => ({
  type: REMOVE_EVENT,
  eventId
})

export const receiveQuery = (query) => ({
  type: RECEIVE_QUERY,
  query
})

export const removeQuery = () => ({
  type: REMOVE_QUERY
})

export const fetchEvents = (data) => dispatch => {
  return EventApiUtil.fetchEvents(data)
                     .then((events) => dispatch(receiveEvents(events)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
};

export const fetchEvent = (id) => dispatch => {
  return EventApiUtil.fetchEvent(id)
                     .then((event) => dispatch(receiveEvent(event)),
                      (errors) => dispatch(receiveErrors(errors.responseJSON))
                    );
}

export const createEvent = (event) => dispatch => {
  return EventApiUtil.createEvent(event)
                     .then((event) => dispatch(receiveEvent(event)),
                     (errors) => dispatch(receiveErrors(errors.responseJSON))
                   );
}

export const updateEvent = (event) => dispatch => {
  return EventApiUtil.updateEvent(event)
                     .then((event) => dispatch(receiveEvent(event)),
                     (errors) => dispatch(receiveErrors(errors.responseJSON))
                   );
}

export const deleteEvent = (eventId) => dispatch => {
  return EventApiUtil.deleteEvent(eventId)
                     .then((event) => dispatch(removeEvent(eventId)),
                     (errors) => dispatch(receiveErrors(errors.responseJSON))
                   );
}
