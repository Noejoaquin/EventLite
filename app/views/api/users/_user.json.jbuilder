json.extract! user, :email, :first_name, :last_name, :id
json.set! :attending_events do
    json.array! user.attending_events.ids
end

json.set! :saved_events do
  json.array! user.saved_events.ids
end
