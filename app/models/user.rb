class User < ApplicationRecord
	enum user_type: [ :staff, :doctor, :patient ]
	attr_accessor :password_confirmation
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  after_create :create_patient_record, if: Proc.new { |user| user.patient? }

  def create_patient_record
  	Patient.create(first_name: self.first_name, last_name: self.last_name, email: self.email)
  end
end
