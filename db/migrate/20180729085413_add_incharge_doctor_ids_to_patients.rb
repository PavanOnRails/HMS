class AddInchargeDoctorIdsToPatients < ActiveRecord::Migration[5.0]
  def change
    add_column :patients, :incharge_doctor_ids, :integer, array: true, default: []
  end
end
