class Api::AlbumsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @albums = @user.albums
        render json: @albums
    end

    def show
        @album = Album.find(params[:id])
        if @album
            render json: {id: @album.id, user_id: @album.user_id, picture_ids: @album.pictures.map { |pic| pic.id }}
        else
            render json: @album.errors
        end
    end

    def create
        @album = Album.create(album_params)
        if @album.save
            render json: {id: @album.id, user_id: @album.user_id, picture_ids: @album.pictures.map { |pic| pic.id }}
        else
            render json: @album.errors
        end
    end

    def destroy
        @album = Album.find(params[:id])
        if @album.destroy
            render json: "Successfully removed album"
        else
            render json: @album.errors
        end
    end

    private

    def album_params
        params.require(:album).permit(:user_id, :name)
    end
end
