class TokensController < ApplicationController
  def verify
    @user = User.find_by(username: params[:user][:username])
    @flag = @user.valid_password?(params[:user][:password])

    if @flag
      @token = @user.access_token
      render json: {token: @token}, status: 200
    end
  end

  def verify_token
      @user = User.find_by(access_token: params[:token])
      if @user
        render json: {user: @user}, status: 200
      end
  end

end
