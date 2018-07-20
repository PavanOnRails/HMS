class DoctorSession < ApplicationRecord
	belongs_to :doctor
	belongs_to :patient

	enum session_status: [:not_started, :started, :ended]
end
