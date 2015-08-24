class TokensController < ApplicationController
  def verify
    @user = User.find_by(username: params[:user][:username])
    @flag = @user.valid_password?(params[:user][:password])

    if @flag
      @token = @user.access_token
      render json: {token: @token}, status: 200
    end
  end

  private
  def auth_params
    params.require(:user).permit(:username, :password)
  end
end
