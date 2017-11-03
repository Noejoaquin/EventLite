export const fetchUsers = () => (
  $.ajax({
    method: 'get',
    url: '/api/users'
  })
)
