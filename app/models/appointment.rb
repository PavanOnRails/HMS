class Appointment < ApplicationRecord
	belongs_to :patient
	belongs_to :doctor

	enum status: [ :pending, :confirmed, :declined, :canceled]
	enum appointment_type: [ :new_appointment, :follow_through, :re_visit ]
end
