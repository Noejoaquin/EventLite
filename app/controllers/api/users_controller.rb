class Api::UsersController < ApplicationController


  def show
    # debugger
    @user = User.find(params[:id])
    render :show
  end
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.messages, status: 422
    end
  end


  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :password)
  end

end
