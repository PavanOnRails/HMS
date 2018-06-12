json.extract! staff, :id, :first_name, :last_name, :email, :password, :created_at, :updated_at
json.url staff_url(staff, format: :json)
