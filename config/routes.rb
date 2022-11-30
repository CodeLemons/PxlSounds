Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :worlds, only: %i[index show] do
    resources :mixes, only: %i[new create]
    resources :mix_sounds, only: %i[create new]
    get '/play', to: 'worlds#play'
  end

  resources :mixes, only: %i[destroy edit update]
  resources :mix_sounds, only: %i[edit update destroy]
end
