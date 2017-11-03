@users.each do |user|
  json.set! user.id do
    json.extract! user, :first_name, :last_name, :id
    json.managed_events user.events.ids
    json.saved_events user.saved_events.ids
    json.attending_events user.attending_events.ids
  end
end
