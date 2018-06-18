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
		User.create(first_name: self.first_name, last_name: self.last_name, email: self.email, phone_number: self.phone_number, age: self.age, user_type: :patient, registration_status: :registration_done)
	end
end
