# == Schema Information
#
# Table name: categories
#
#  id   :integer          not null, primary key
#  name :string
#

class Category < ApplicationRecord
  validates :name, presence: true

  has_many :events,
  primary_key: :id,
  class_name: 'Events',
  foreign_key: :category_id
end
