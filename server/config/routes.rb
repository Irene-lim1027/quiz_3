Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  get('/auctions', { to: 'auctions#index'})
  root 'auctions#index'

  resources :auctions do
    resources :bids, only:[:create,:update,:destroy]
  end

  resources :users, only: [:new, :create, :edit, :update, :destroy]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, default: {format: :json} do
    namespace :v1 do
      resources :auctions, only:[:index, :show, :create, :update, :destroy] do
      resources :bids, only:[:index,:show,:create]
      end
      resources :sessions, only: [:create]
      delete('/sign_out', to:'sessions#destroy')
      resources :users, only: [:create]
      get('/current_user', to:'sessions#get_current_user')
    end
  end
end
