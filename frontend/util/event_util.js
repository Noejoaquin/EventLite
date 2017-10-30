export const fetchEvents = () => (
  $.ajax({
    method: 'Get',
    url: '/api/events'
  })
)

export const fetchEvent = (id) => (
  $.ajax({
    method: 'Get',
    url: `/api/events/${id}`
  })
)

export const createEvent = (formData) => {
  return (
  $.ajax({
    method: 'Post',
    url: '/api/events',
    contentType: false,
    processData: false,
    data:  formData,
  })
)}

export const updateEvent = (event) => (
  $.ajax({
    method: 'Patch',
    url: `/api/events/${event.id}`,
    data: { event }
  })
)

export const deleteEvent = (id) => (
  $.ajax({
    method: 'Delete',
    url: `/api/events/${id}`
  })
)
