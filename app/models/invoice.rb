class Invoice < ApplicationRecord
	belongs_to :patient
	has_many :invoice_items
	has_one :bill

	accepts_nested_attributes_for :invoice_items, reject_if: :all_blank, allow_destroy: true
	accepts_nested_attributes_for :bill, reject_if: :all_blank
end
