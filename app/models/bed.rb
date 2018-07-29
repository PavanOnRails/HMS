class Bed < ApplicationRecord
	belongs_to :patient
	belongs_to :ward
	belongs_to :room

	enum status: [:vacant, :occupied]

	# after_save :update_room_status
	# after_destroy :update_room_status

	# def update_room_status
	# 	if self.room.capacity == self.room.beds.count
	# 		self.room.update_column(:status, :full)
	# 	elsif self.room.capacity != self.room.beds.count
	# 		self.room.update_column(:status, :vacant)
	#   elsif self.room.capacity == self.room.beds.count && self.room.beds.count == self.room.beds.where(status: :occupied).count
	# 		self.room.update_column(:status, :occupied)
	#   elsif self.room.capacity == self.room.beds.count && self.room.beds.count != self.room.beds.where(status: :occupied).count
	# 		self.room.update_column(:status, :not_occupied)
	# 	end
	# end
end
