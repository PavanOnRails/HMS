class Bed < ApplicationRecord
	belongs_to :patient
	belongs_to :ward

	enum status: [:vacant, :occupied]
end
