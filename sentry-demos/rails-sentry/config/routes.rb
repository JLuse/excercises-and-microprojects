require 'sidekiq/web'

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  mount Sidekiq::Web => "/sidekiq"

  get "health/liveness"

  post "health/trigger_sentry"

  # route where any visitor require the helloWorldJob to be triggered
  post "health/trigger_job"

  # where visitor are redirected once job has been called
  get "other/job_done"

  root to: "health#liveness"

  # Defines the root path route ("/")
  # root "articles#index"
end
