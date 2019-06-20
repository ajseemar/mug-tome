class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :show
        else
            render json: {errors: @user.errors, type: 'Sign Up'}, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end
    
    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :date_of_birth, :gender, :email, :mobile_number, :password)
    end
end
