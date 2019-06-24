class Api::FriendShipsController < ApplicationController
  before_action :set_friend, only: :destroy

  def index
    @friends = current_user.friends
    # render :index
  end

  def show
    @friends = User.find(params[:user_id]).friends
    # render :index
  end

  def destroy
    if @friend
      current_user.remove_friend(@friend)
      render json: "Successfully removed user from friends"
    else
      render json: "Can not unfriend a user that is not a friend", status: 402
    end
  end

  private

  def set_friend
    @friend = User.find(params[:user_id]).friends.find(params[:id])
  end

end
