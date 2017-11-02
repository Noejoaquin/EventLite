export const createSave = (eventId) => {
  return $.ajax({
    method: 'post',
    url: `/api/events/${eventId}/save`
  })
}


export const deleteSave = (eventId) => {
  return $.ajax({
    method: 'delete',
    url: `api/events/${eventId}/unsave`
  })

}
