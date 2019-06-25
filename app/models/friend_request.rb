# == Schema Information
#
# Table name: friend_requests
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ApplicationRecord
  validate :not_self, :not_friends , :not_pending

  belongs_to :user
  belongs_to :friend, class_name: 'User'

  def accept
    user.friends << friend
    destroy
  end

  private

  def not_friends
    errors.add(:friend, 'is already added') if user.friends.include?(friend)
  end

  def not_pending
    errors.add(:friend, 'already requested friendship') if user.pending_friends.include?(friend)
  end

  def not_self
    errors.add(:friend, "can't be equal to user") if user == friend
  end
end
