Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resource :home, only: [] do
    get :show, as: "home", to: "home#show"
    get :experience, as: "experience", to: "home#experience"
  end

  root to: "home#show"
  
end
