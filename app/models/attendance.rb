# == Schema Information
#
# Table name: attendances
#
#  id       :integer          not null, primary key
#  user_id  :integer
#  event_id :integer
#

class Attendance < ApplicationRecord

  belongs_to :attendee,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :user_id

  belongs_to :event,
  primary_key: :id,
  class_name: 'Event',
  foreign_key: :event_id
end
