class AddDonorIdToBloodDonors < ActiveRecord::Migration[5.0]
  def change
    add_column :blood_donors, :donor_id, :string
  end
end
