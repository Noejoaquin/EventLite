# == Schema Information
#
# Table name: events
#
#  id                 :integer          not null, primary key
#  category_id        :integer          not null
#  organizer_id       :integer          not null
#  name               :string           not null
#  description        :text             not null
#  location           :string           not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  ticket_type        :string           not null
#  price              :float            not null
#  start_time         :datetime         not null
#  end_time           :datetime
#

class Event < ApplicationRecord

  validates :name, :description, :location, :ticket_type, :price, :start_time, presence: true

  belongs_to :category,
  primary_key: :id,
  class_name: 'Category',
  foreign_key: :category_id

  belongs_to :organizer,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :organizer_id

  has_attached_file :image, default_url: "default-event.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
