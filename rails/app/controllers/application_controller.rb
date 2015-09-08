class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  def current_user
    @current_user
  end

  protected
  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      @current_user ||=User.find_by(access_token: token)
    end
  end

end
