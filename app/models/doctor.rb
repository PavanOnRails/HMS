class Doctor < ApplicationRecord
	after_save :create_user_record_for_doctor
	has_many :appointments
	has_many :patients, through: :appointments
	has_many :doctor_sessions
	has_many :reports

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end

	def create_user_record_for_doctor
		user = User.find_or_initialize_by(email: self.email)
		user.first_name = self.first_name
		user.last_name = self.last_name
		user.password = "#{self.first_name}#{self.last_name}"
		user.phone_number = self.phone_number
		user.age = self.age
		user.user_type = "doctor"
		user.save
	end
end
