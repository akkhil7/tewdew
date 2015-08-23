class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  #
  require 'securerandom'
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :todos

  before_create :update_access_token!

  def update_access_token!
    return if access_token.present?
    self.access_token = SecureRandom.uuid.gsub(/\-/,'')
  end

end
