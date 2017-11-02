# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string           not null
#  last_name           :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :email, uniqueness: { scope: [:first_name, :last_name] }
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, default_url: "default-event.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :events,
  primary_key: :id,
  class_name: 'Event',
  foreign_key: :organizer_id

  has_many :attendances,
  primary_key: :id,
  class_name: 'Attendance',
  foreign_key: :user_id

  has_many :attending_events,
  through: :attendances,
  source: :event

  has_many :saves,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'SavedEvent'

  has_many :saved_events,
  through: :saves,
  source: :event



  after_initialize :ensure_session_token!

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
