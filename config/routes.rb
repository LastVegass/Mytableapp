Rails.application.routes.draw do

  namespace :api do
    namespace :version1 do
      get 'sorting/sort_by_name'
      get 'sorting/sort_by_birthdate'
      resources :users
    end
  end
end
