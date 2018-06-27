class DoctorSession < ApplicationRecord
	belongs_to :doctor
	belongs_to :patient

	enum session_status: [:started, :ended]
end
