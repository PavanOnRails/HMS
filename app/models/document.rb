class Document < ApplicationRecord
	mount_uploader :file, DocumentUploader

	def self.import(file, class_name)
		class_names = ['Staff', 'Doctor', 'Nurse']
	  spreadsheet = Roo::Spreadsheet.open(file.path)
	  header = spreadsheet.row(1)
	  (2..spreadsheet.last_row).each do |i|
	    row = Hash[[header, spreadsheet.row(i)].transpose]
	    if class_names.include?(class_name)
	      model = class_name.constantize.find_or_initialize_by(emp_id: row["emp_id"])
	    elsif class_name == 'Ward'
	    	model = class_name.constantize.find_or_initialize_by(name: row["name"])
	    elsif class_name == 'Room'
	    	model = class_name.constantize.find_or_initialize_by(room_no: row["room_no"])
	    elsif class_name == 'Bed'
	    	model = class_name.constantize.find_or_initialize_by(bed_no: row["bed_no"])
	    elsif class_name == 'BloodDonor'
	    	model = class_name.constantize.find_or_initialize_by(donor_id: row["donor_id"])
	    end
	    model.attributes = row.to_hash
	    model.save!
	  end
	end
end
