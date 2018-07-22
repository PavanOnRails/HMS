class Bed < ApplicationRecord
	belongs_to :patient
	belongs_to :ward
	belongs_to :room

	enum status: [:vacant, :occupied]
end
