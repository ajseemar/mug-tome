# == Schema Information
#
# Table name: comments
#
#  id               :bigint           not null, primary key
#  commentable_type :string
#  commentable_id   :bigint
#  user_id          :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  body             :text             not null
#

class Comment < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :commentable, polymorphic: true

    belongs_to :user

    has_many :likes, as: :likeable
end
