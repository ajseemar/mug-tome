class Api::CommentsController < ApplicationController
    def index
        @commentable = Post.find(params[:post_id])
    end
end
