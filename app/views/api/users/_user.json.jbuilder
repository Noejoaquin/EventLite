json.extract! user, :email, :first_name, :last_name, :id
json.set! :attending_events do
    json.array! user.attending_events.ids
end
