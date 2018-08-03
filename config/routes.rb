Rails.application.routes.draw do
  get 'documents/import'

  get 'documents/export'

  get 'documents/generate_pdf'

  resources :nurses
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
  resources :wards
  resources :rooms
  resources :beds
  resources :blood_banks
  resources :blood_groups
  resources :blood_donors
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#home'
  
  get '/doctors/:id/dashboard', to: 'dashboards#doctor_dashboard', as: 'doctors_dashboard'
  get '/patients/:id/dashboard', to: 'dashboards#patient_dashboard', as: 'patients_dashboard'
  get '/staff/:id/dashboard', to: 'dashboards#staff_dashboard', as: 'staff_dashboard'
  get '/employee/:id/dashboard', to: 'dashboards#employee_dashboard', as: 'employee_dashboard'
  get '/staff/:id/department/:department_id/dashboard', to: 'dashboards#department_dashboard', as: 'department_dashboard'
  get '/super_admin/:id/dashboard', to: 'dashboards#super_admin_dashboard', as: 'super_admin_dashboard'
  patch '/appointments/:id/update_status', to: 'appointments#update_status', as: 'update_status'
  post '/get_states', to: 'static_pages#get_states', as: 'get_states'
  post '/get_cities', to: 'static_pages#get_cities', as: 'get_cities'
  post '/get_rooms', to: 'static_pages#get_rooms', as: 'get_rooms'
  post '/get_beds', to: 'static_pages#get_beds', as: 'get_beds'
  get '/start_session', to: 'doctor_sessions#start_session', as: 'start_session'
  patch '/end_session', to: 'doctor_sessions#end_session', as: 'end_session'
  get '/inpatients', to: 'patients#inpatients', as: 'inpatients'
  get '/outpatients', to: 'patients#outpatients', as: 'outpatients'
  get '/edit_inpatient/:id', to: 'patients#edit_inpatient', as: 'edit_inpatient'
  put '/update_inpatient/:id', to: 'patients#update_inpatient', as: 'update_inpatient'
  get '/admins', to: 'staffs#admins', as: 'admins'
  get '/super_admins', to: 'staffs#super_admins', as: 'super_admins'
  get '/generate_pdf', to: 'documents#generate_pdf', as: 'generate_pdf'
  get '/download_file', to: 'documents#download_file', as: 'download_file'
  post '/import', to: 'documents#import', as: 'import'
  get '/export', to: 'documents#export', as: 'export'
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
