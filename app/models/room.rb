class Room < ApplicationRecord
	has_many :beds
	belongs_to :ward

	enum room_type: [:single, :shared]
end
