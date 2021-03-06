class Api::PostsController < ApplicationController
    def index
        @posts = Post.all.order(created_at: :desc)
        render :index
    end

    def show
        @post = Post.find(params[:id])
        # debugger
        if @post
            render :show
        else
            render json: @post.errors, status: 404
        end
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        @post.friend_id ||= current_user.id
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
