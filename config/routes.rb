Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Redirect to index after succesful sign-up/log-in
  get "user", to: "worlds#index", as: :user_root

  # Defines the root path route ("/")
  # root "articles#index"
  resources :worlds, only: %i[index show new create edit update] do
    resources :mixes, only: %i[new create edit], path_names: { new: 'play', edit: 'play' }
    resources :mix_sounds, only: %i[new]
    resources :sounds, only: %i[edit new create update]
  end

  resources :users, only: %i[show]

  resources :mixes, only: %i[destroy update] do
    resources :mix_sounds, only: %i[create]
  end
  resources :mix_sounds, only: %i[edit update destroy]


end
