# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  likeable_type :string
#  likeable_id   :bigint
#  user_id       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ApplicationRecord
    validates_uniqueness_of :user_id, :scope => [:likeable_id, :likeable_type]

    belongs_to :likeable, polymorphic: true

    belongs_to :user
end
