Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'


  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :events do
      post 'attend', to: 'events#attend'
      delete 'unattend', to: 'events#unattend'
      post 'save', to: 'events#save'
      delete 'unsave', to: 'events#unsave'
    end
    resources :categories, only: [:index]
  end
end
