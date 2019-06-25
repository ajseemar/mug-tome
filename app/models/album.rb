# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Album < ApplicationRecord
    validates :name, presence: true
    belongs_to :user
    # has_many_attached :photos

    has_many :pictures
    
end

