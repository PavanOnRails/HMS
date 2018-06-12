class Staff < ApplicationRecord
	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end
end
