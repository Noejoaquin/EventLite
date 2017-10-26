export const fetchCategories = () => (
  $.ajax({
    method: 'Get',
    url: '/api/categories'
  })
)
