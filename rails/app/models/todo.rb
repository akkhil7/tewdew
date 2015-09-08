# == Schema Information
#
# Table name: todos
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  done       :boolean
#  created_at :datetime
#  updated_at :datetime
#  user_id    :integer
#

class Todo < ActiveRecord::Base
  belongs_to :user
end
