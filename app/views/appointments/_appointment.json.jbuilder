json.extract! appointment, :id, :appointment_date, :status, :doctor_id, :patient_id, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)
