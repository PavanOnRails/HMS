class Doctor < ApplicationRecord
	has_many :appointments
	has_many :patients, through: :appointments

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end
end
