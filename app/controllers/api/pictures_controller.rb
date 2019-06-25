class Api::PicturesController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @pictures = @user.pictures + @user.album_pictures
        render json: @pictures.map { |pic| {picture: pic.photo, user_id: pic.user_id, id: pic.id, content: pic.content} }
    end

    def show
        @picture = Picture.find(params[:id])
        if @picture
            render json: {content: @picture.content, picture: @picture.photo, user_id: @picture.user_id, id: @picture.id}
        else
            render json: @picture.errors
        end
    end

    def create
        @picture = Picture.create(picture_params)
        @picture.user_id = current_user.id
        @picture.photo.attach(io: params[:picture][:photo])
        if @picture.save
            render json: {content: @picture.content, picture: @picture.photo, user_id: @picture.user_id, id: @picture.id}
        else
            render json: @picture.errors
        end
    end

    def destroy
        @picture = Picture.find(params[:id])
        if @picture.destroy
            render json: "Successfully removed image"
        else
            render json: @picture.errors
        end
    end

    private

    def picture_params
        params.require(:picture).permit(:user_id, :album_id, :content, :photo)
    end
end
