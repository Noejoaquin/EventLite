json.partial! '/api/users/user', user: @user


json.set! :attending_events do
    json.array! @user.attending_events.ids
end
