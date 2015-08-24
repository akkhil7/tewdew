class UsersController < ApplicationController

  def index
    @users=User.all
    render json: @users, status: 200
  end

  def new
  @user=User.new()
  end

  def create
    @user = User.new(user_params)

    if @user.save!
      render json: @user, status: 200
    else
      render json: @user.errors, status: 422
    end
  end

  def me
    @user = current_user
    render json: @user, status: 200
  end


 private
  def user_params
    params.require(:user).permit(:username, :password, :email, :first_name, :last_name)
  end
end



