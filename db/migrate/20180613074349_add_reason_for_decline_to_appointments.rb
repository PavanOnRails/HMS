class AddReasonForDeclineToAppointments < ActiveRecord::Migration[5.0]
  def change
    add_column :appointments, :reason_for_decline, :text
  end
end
