Rails.application.routes.draw do

  devise_for :users, :controllers => { :registrations => 'users' }
  root :to => "home#index"
  resources :todoo
  resources :users
  resources :tokens do
    collection do
      post :verify
      post :verify_token
    end
  end

end
