# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
    validate :not_self

    # after_create :create_relationship
    after_destroy :destroy_relationship

    belongs_to :user
    belongs_to :friend, class_name: 'User'

    private

    def create_relationship
        friend.friendships.create(friend: user)
    end

    def destroy_relationship
        friendship = friend.friendships.find_by(friend: user)
        friendship.destroy if friendship
    end

    def not_self
        errors.add(:friend, "can't be equal to user") if user == friend
    end
end
