class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protected
  def authenticate
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(access_token: token)
    end
  end

end
