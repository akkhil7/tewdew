Rails.application.routes.draw do

  devise_for :users, :controllers => { :registrations => 'users' }
  root :to => "home#index"
  resources :todoo

  resources :tokens do
    collection do
      post :verify
    end
  end

end
