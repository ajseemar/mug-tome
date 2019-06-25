Rails.application.routes.draw do
  # namespace :api do
  #   get 'friends/index'
  #   get 'friends/destroy'
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:index, :create, :show] do
      resources :friends, only: [:show]
      resources :pictures, only: [:index]
      resources :albums, only: [:index]
    end
    resources :friends, only: [:index, :destroy]
    resources :friend_requests, except: [:edit, :show, :new]
    resources :pictures, only: [:show, :create, :destroy]
    resources :albums, only: [:show, :create, :destroy]
  end
end
