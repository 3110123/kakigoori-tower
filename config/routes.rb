Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'moves#new'
  post '/callback', to: 'linebots#callback'
end
