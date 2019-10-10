class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    debugger
    # @user.buying_power ||= 0.00
    if @user.save 
      login!(@user)
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