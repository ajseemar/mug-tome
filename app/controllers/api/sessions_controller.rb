class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show'
            return
        else
            render json: {errors: ["Invalid combination of username and password", "Please try again"], type: "Log In"}, status: 422
        end
    end

    def destroy
        logout() if current_user
        render json: {}
    end
end
