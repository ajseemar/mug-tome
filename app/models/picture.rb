# == Schema Information
#
# Table name: pictures
#
#  id         :bigint           not null, primary key
#  user_id    :integer
#  album_id   :integer
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Picture < ApplicationRecord
    belongs_to :user
    belongs_to :album, optional: true

    has_one_attached :photo
end


# post = Post.first
# file = File.open('app/assets/images/sennacy.jpg')
# post.photo.attach(io: file, filename: 'sennacy.jpg')
# post.photo.attached? # => true