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

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
