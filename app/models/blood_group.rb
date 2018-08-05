class BloodGroup < ApplicationRecord
	has_many :blood_donors

	def blood_group_with_rh_factor
		[name,rh_factor].select(&:present?).join(' ').titleize
	end
end
