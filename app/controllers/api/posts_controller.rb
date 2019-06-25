class Api::PostsController < ApplicationController
    def index
        @posts = Post.where(friend_id: current_user.id).order(created_at: :desc)
        render :index
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        Post.find(params[:id]).destroy
    end

    private

    def post_params
        params.require(:post).permit(:body, :friend_id)
    end
end
