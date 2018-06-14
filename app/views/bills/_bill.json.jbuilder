json.extract! bill, :id, :registration_fee, :doctor_fee, :pharmacy_bill, :maintenance_fee, :tax, :created_at, :updated_at
json.url bill_url(bill, format: :json)
