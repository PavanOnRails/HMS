class AddLabTestsSuggestedToDoctorSessions < ActiveRecord::Migration[5.0]
  def change
    add_column :doctor_sessions, :lab_tests_suggested, :boolean, default: false
  end
end
