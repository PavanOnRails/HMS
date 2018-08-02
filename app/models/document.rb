class Document < ApplicationRecord
	mount_uploader :file, DocumentUploader

	def self.import(file, class_name)
	  spreadsheet = Roo::Spreadsheet.open(file.path)
	  header = spreadsheet.row(1)
	  (2..spreadsheet.last_row).each do |i|
	    row = Hash[[header, spreadsheet.row(i)].transpose]
	    model = class_name.constantize.find_or_initialize_by(emp_id: row["emp_id"])
	    model.attributes = row.to_hash
	    model.save!
	  end
	end
end
