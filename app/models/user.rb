# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  mobile_number   :string
#  email           :string           not null
#  date_of_birth   :date             not null
#  gender          :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password
    
    validates :first_name, :last_name, :date_of_birth, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :email, :session_token, presence: true, uniqueness: true
    validates :gender, inclusion: { in: %w(Male Female),
        message: "Please select a gender from the available options" }
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    has_many :friend_requests, dependent: :destroy
    has_many :pending_friends, through: :friend_requests, source: :friend

    has_many :friendships, dependent: :destroy
    has_many :friends, through: :friendships

    has_many :posts
    has_many :posts_to_feed,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :Post

    has_many :albums
    has_many :album_pictures, through: :albums, source: :pictures
    has_many :pictures

    has_many :likes
    has_many :comments

    # has_and_belongs_to_many :friends,
    #   class_name: "User", 
    #   join_table:  :friendships, 
    #   foreign_key: :user_id, 
    #   association_foreign_key: :friend_id

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def remove_friend(friend)
        self.friends.destroy(friend)
    end
end
