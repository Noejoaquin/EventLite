@users.each do |user|
  json.set! user.id do
    json.extract! user, :first_name, :last_name
    json.managed_events user.events.ids
  end
end
