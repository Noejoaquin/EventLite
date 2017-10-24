class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.full_errors.full_messages, status: 422
    end
  end


  def user_params
    params.require(:user).permit(:email, :first_name, :last_name)
  end

end
