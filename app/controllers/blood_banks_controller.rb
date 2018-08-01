class BloodBanksController < ApplicationController
	layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_blood_bank, only: [:edit, :update, :destroy]

  def index
    @blood_banks = BloodBank.all
  end

  def new
    @blood_bank = BloodBank.new
  end

  def create
    @blood_bank = BloodBank.new(blood_bank_params)

    respond_to do |format|
      if @blood_bank.save
        format.html { redirect_to blood_banks_path, notice: 'Blood Bank was successfully created.' }
        format.json { render :show, status: :created, location: @blood_bank }
      else
        format.html { render :new }
        format.json { render json: @blood_bank.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @blood_bank.update(blood_bank_params)
        format.html { redirect_to blood_banks_path, notice: 'Blood Bank was successfully updated.' }
        format.json { render :show, status: :ok, location: @blood_bank }
      else
        format.html { render :edit }
        format.json { render json: @blood_bank.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @blood_bank.destroy
    respond_to do |format|
      format.html { redirect_to blood_banks_url, notice: 'Blood Bank was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_blood_bank
    @blood_bank = BloodBank.find(params[:id])
  end

  def blood_bank_params
    params.require(:blood_bank).permit(:name, :address, :phone_number, :hospital_id, :incharge)
  end
end
