class Room < ApplicationRecord
	has_many :beds
	belongs_to :ward
	belongs_to :patient

	enum room_type: [:single, :two_sharing, :three_sharing, :four_sharing]
	enum status: [:vacant, :full, :occupied, :not_occupied]

	def room_with_room_type
		"#{self.room_no}(#{self.room_type.humanize.capitalize})"
	end
end
