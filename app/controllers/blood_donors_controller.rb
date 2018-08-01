class BloodDonorsController < ApplicationController
	layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_blood_donor, only: [:edit, :update, :destroy]

  def index
    @blood_donors = BloodDonor.all
  end

  def new
    @blood_donor = BloodDonor.new
  end

  def create
    @blood_donor = BloodDonor.new(blood_donor_params)

    respond_to do |format|
      if @blood_donor.save
        format.html { redirect_to blood_donors_path, notice: 'Blood Donor was successfully created.' }
        format.json { render :show, status: :created, location: @blood_donor }
      else
        format.html { render :new }
        format.json { render json: @blood_donor.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @blood_donor.update(blood_donor_params)
        format.html { redirect_to blood_donors_path, notice: 'Blood Donor was successfully updated.' }
        format.json { render :show, status: :ok, location: @blood_donor }
      else
        format.html { render :edit }
        format.json { render json: @blood_donor.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @blood_donor.destroy
    respond_to do |format|
      format.html { redirect_to blood_donors_url, notice: 'Blood Donor was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_blood_donor
    @blood_donor = BloodDonor.find(params[:id])
  end

  def blood_donor_params
    params.require(:blood_donor).permit(:name, :address, :phone_number, :blood_group_id)
  end
end
