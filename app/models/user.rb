class User < ApplicationRecord
    attr_reader :password
    
    validates :first_name, :last_name, :date_of_birth, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :email, :session_token, presence: true, uniqueness: true
    validates :gender, inclusion: { in: %w(Male Female),
        message: "Please select a gender from the available options" }
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

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
end
