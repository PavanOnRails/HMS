class LeaveType < ApplicationRecord
	belongs_to :hospital

	enum gender: [:male, :female, :both]
	enum marital_status: [:unmarried, :married, :both], _suffix: true
end
