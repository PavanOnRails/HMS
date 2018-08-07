class Report < ApplicationRecord
	belongs_to :patient
	belongs_to :doctor
	belongs_to :department
	belongs_to :staff

	enum report_type: [:patient_report, :doctor_report, :department_report, :employee_report]
end
