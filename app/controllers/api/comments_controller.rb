class Api::CommentsController < ApplicationController
    before_action :load_commentable, only: [:index]

    def index
        # @commentable = Post.find(params[:post_id])
        @comments = @commentable.comments
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors, status: 400
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destroy if comment
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :commentable_type, :commentable_id);
    end

    def load_commentable
        klass = [Post, Picture, Album].detect { |c| params["#{c.name.underscore}_id"]}
        @commentable = klass.find(params["#{klass.name.underscore}_id"])
    end
end
