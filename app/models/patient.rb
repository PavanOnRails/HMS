class Patient < ApplicationRecord
	has_many :appointments
	has_many :doctors, through: :appointments
	has_one :bill

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end
end
