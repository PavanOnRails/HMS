class AttendanceDetail < ApplicationRecord
	belongs_to :staff

	after_save :save_total_hours_worked, if: Proc.new { |p| p.in_time.present? && p.out_time.present? }

	def save_total_hours_worked
		total_hours = TimeDifference.between(self.out_time, self.in_time).humanize
		self.update_column(:total_hours_worked, total_hours)
	end
end
