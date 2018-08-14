class Bill < ApplicationRecord
	enum paid_with: [:cash, :debit_card, :credit_card]
	#enum bill_type: [:registration_fee, :doctor_fee, :pharmacy_bill, :maintenance_bill]

	belongs_to :patient
	belongs_to :invoice
end
