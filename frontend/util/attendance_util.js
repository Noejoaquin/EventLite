export const createAttendance = (eventId) => {
  return $.ajax({
    method: 'post',
    url: `/api/events/${eventId}/attend`
  })
}

export const deleteAttendance = (eventId) => (
  $.ajax({
    method: 'delete',
    url: `/api/events/${eventId}/unattend`
  })
)
