class Doctor < ApplicationRecord
	has_many :appointments
	has_many :patients, through: :appointments
	has_many :doctor_sessions

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end
end
