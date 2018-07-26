class Staff < ApplicationRecord

	after_create :create_user_record_for_staff

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end
end
