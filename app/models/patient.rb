class Patient < ApplicationRecord
	has_many :appointments
	has_many :doctors, through: :appointments
	has_one :bill
  
  accepts_nested_attributes_for :appointments
  enum registration_status: [ :registration_done, :registration_not_done]
  
  after_create :create_user_record

	def full_name
		[first_name,last_name].select(&:present?).join(' ').titleize
	end

	def create_user_record
		user = User.new
    user.first_name = self.first_name
    user.last_name = self.last_name
    user.email = self.email
    user.password = "#{self.first_name}#{self.last_name}"
    user.password_confirmation = "#{self.first_name}#{self.last_name}"
    user.phone_number = self.phone_number 
    user.age = self.age
    user.user_type = 'patient'
    user.registration_status = 'registration_done'
    user.save
	end
end
