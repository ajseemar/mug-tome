class Api::LikesController < ApplicationController
    before_action :load_likeable, only: [:index]

    def index
        # @likeable = Post.find(params[:post_id])
        @likes = @likeable.comments
        render :index
    end

    def create
        @like = Like.new(like_params)
        @like.user_id = current_user.id
        if @like.valid?
            @like.save
            render :show
        else
            # debugger
            Like.find_by(likeable_type: params[:like][:likeable_type], likeable_id: params[:like][:likeable_id], user_id: current_user.id).destroy
        end
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy if like
    end

    private

    def like_params
        params.require(:like).permit(:likeable_type, :likeable_id);
    end

    def load_likeable
        klass = [Post, Picture, Album].detect { |c| params["#{c.name.underscore}_id"]}
        @likeable = klass.find(params["#{klass.name.underscore}_id"])
    end
end
