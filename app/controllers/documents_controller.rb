class DocumentsController < ApplicationController
	layout 'gentellela_theme'
	
  def import
  	Document.import(params[:file], params[:class_name])
  	if params[:class_name] == "Staff"
  		redirect_to staffs_path, notice: "Staff data imported sucessfully"
  	elsif params[:class_name] == "Doctor"
  		redirect_to doctors_path, notice: "Doctors data imported sucessfully"
  	elsif params[:class_name] == "Nurse"
  		redirect_to nurses_path, notice: "Nurses data imported sucessfully"
  	elsif params[:class_name] == "Ward"
  		redirect_to wards_path, notice: "Wards data imported sucessfully"
  	elsif params[:class_name] == "Room"
  		redirect_to rooms_path, notice: "Rooms data imported sucessfully"
  	elsif params[:class_name] == "Bed"
  		redirect_to beds_path, notice: "Beds data imported sucessfully"
  	elsif params[:class_name] == "BloodDonor"
  		redirect_to blood_donors_path, notice: "Blood Donors data imported sucessfully"
  	end
  end

  def export
  end

  def generate_pdf
  end

  def download_file
  	send_file(
    "#{Rails.root}/public/files/sample_#{params[:class_name]}_import_file.xlsx",
    filename: "sample_#{params[:class_name]}_import_file.xlsx",
    type: "application/xlsx",
    disposition: "attachment"  )
  end
end
