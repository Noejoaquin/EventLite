Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  post 'api/events/:id/attend', to: 'events#attend'
  delete 'api/events/:id/unattend', to: 'event#unattend'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :events
    resources :categories, only: [:index]
  end
end
