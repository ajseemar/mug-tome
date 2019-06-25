class Api::FriendRequestsController < ApplicationController
    before_action :set_friend_request, except: [:index, :create]

    def index
        @incoming = FriendRequest.where(friend: current_user)
        @outgoing = current_user.friend_requests

        render json: { incoming: @incoming, outgoing: @outgoing }
    end

    def create
        friend = User.find(params[:friend_request][:friend_id])
        @friend_request = User.find(params[:friend_request][:user_id]).friend_requests.new(friend_request_params)

        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors, status: :unprocessable_entity
        end
    end

    def update
        @friend_request.accept
        render json: {friends: current_user.friends}
    end

    def destroy
        @friend_request.destroy
    end

    private

    def set_friend_request
        @friend_request = FriendRequest.find(params[:id])
    end

    def friend_request_params
        params.require(:friend_request).permit(:user_id, :friend_id)
    end
end
