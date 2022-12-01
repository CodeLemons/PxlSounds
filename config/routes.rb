Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :worlds, only: %i[index show] do
    resources :mixes, only: %i[create]
    resources :mix_sounds, only: %i[create new]
    member do
      get '/play', to: 'mixes#new'
      get '/play/:mix_id', to: 'mixes#edit'
    end
  end

  resources :mixes, only: %i[destroy update]
  resources :mix_sounds, only: %i[edit update destroy]
end
