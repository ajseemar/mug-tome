# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text
#  user_id    :integer
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :body, presence: true

    belongs_to :user

    belongs_to :friend,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :User

    has_many :likes, as: :likeable
    has_many :comments, as: :commentable
end
