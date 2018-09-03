class Staff < ApplicationRecord
	has_many :reports
	has_many :attendance_details
	after_save :create_user_record_for_staff

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end

	def create_user_record_for_staff
		user = User.find_or_initialize_by(email: self.email)
		user.first_name = self.first_name
		user.last_name = self.last_name
		user.password = "#{self.first_name}#{self.last_name}"
		user.phone_number = self.phone_number
		user.age = self.age
		user.user_type = "staff"
		user.save
	end
end
