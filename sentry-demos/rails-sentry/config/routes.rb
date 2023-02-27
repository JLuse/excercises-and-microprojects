Rails.application.routes.draw do
  root "sentry#index"

  get "/sentry", to: "sentry#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "art#index"
end
