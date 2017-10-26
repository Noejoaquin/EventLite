Rails.application.routes.draw do
  namespace :api do
    get 'events/index'
  end

  namespace :api do
    get 'events/show'
  end

  namespace :api do
    get 'events/create'
  end

  namespace :api do
    get 'events/destroy'
  end

  namespace :api do
    get 'events/update'
  end

  namespace :api do
    get 'events/new'
  end

  namespace :api do
    get 'events/edit'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
  end
end
