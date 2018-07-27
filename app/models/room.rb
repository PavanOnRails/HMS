class Room < ApplicationRecord
	has_many :beds
	belongs_to :ward
	belongs_to :patient

	enum room_type: [:single, :shared]
	enum sharing_type: [:two_sharing, :three_sharing, :four_sharing]
	enum status: [:vacant, :full]
end
