class AddPatientIdToRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :patient_id, :integer
  end
end
