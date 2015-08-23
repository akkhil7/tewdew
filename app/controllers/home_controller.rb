class HomeController < ApplicationController
  def index
    if user_signed_in?
      redirect_to :controller => 'todoo', :action => 'index'
   end
 end
end
