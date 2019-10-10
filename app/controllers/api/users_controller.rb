class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    # @user.buying_power ||= 0.00
    if @user.save 
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    # @user = User.find(params[:id])
    if current_user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :buying_power, :total_portfolio_value)
  end

end