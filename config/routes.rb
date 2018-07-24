Rails.application.routes.draw do
  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :lab_tests
  resources :bills
  resources :appointments
  resources :staffs
  resources :patients
  resources :doctors
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#home'
  
  get '/doctors/:id/dashboard', to: 'users#doctor_dashboard', as: 'doctors_dashboard'
  get '/patients/:id/dashboard', to: 'users#patient_dashboard', as: 'patients_dashboard'
  get '/staff/:id/dashboard', to: 'users#staff_dashboard', as: 'staff_dashboard'
  patch '/appointments/:id/update_status', to: 'appointments#update_status', as: 'update_status'
  post '/get_states', to: 'static_pages#get_states', as: 'get_states'
  post '/get_cities', to: 'static_pages#get_cities', as: 'get_cities'
  post '/get_beds', to: 'static_pages#get_beds', as: 'get_beds'
  get '/start_session', to: 'doctor_sessions#start_session', as: 'start_session'
  patch '/end_session', to: 'doctor_sessions#end_session', as: 'end_session'
  get '/inpatients', to: 'patients#inpatients', as: 'inpatients'
  get '/outpatients', to: 'patients#outpatients', as: 'outpatients'
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
