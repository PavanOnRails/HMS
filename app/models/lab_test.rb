class LabTest < ApplicationRecord
	belongs_to :patient
	belongs_to :lab_test_type
end
