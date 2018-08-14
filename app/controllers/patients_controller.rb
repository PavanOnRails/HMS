class PatientsController < ApplicationController
  layout 'gentellela_theme', only: [:index, :new, :edit, :inpatients, :outpatients, :edit_inpatient]
  before_action :set_patient, only: [:show, :edit, :update, :destroy, :edit_inpatient]

  # GET /patients
  # GET /patients.json
  def index
    @patients = Patient.all
    @appointments = Appointment.where(status: :pending)
    @confirmed_appointments = Appointment.where(status: :confirmed)
  end

  # GET /patients/1
  # GET /patients/1.json
  def show
  end

  # GET /patients/new
  def new
    @patient = Patient.new
    @patient.appointments.build
  end

  # GET /patients/1/edit
  def edit
  end

  # POST /patients
  # POST /patients.json
  def create
    @patient = Patient.new(patient_params)

    respond_to do |format|
      if @patient.save
        if @patient.inpatient?
          @patient.map_room_and_bed_to_patient(@patient, params[:room_id], params[:bed_id])
        end
        format.html { redirect_to patients_path, notice: 'Patient was successfully created.' }
        format.json { render :show, status: :created, location: @patient }
      else
        format.html { render :new }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /patients/1
  # PATCH/PUT /patients/1.json
  def update
    respond_to do |format|
      if @patient.update(patient_params)
        if @patient.inpatient?
          @patient.map_room_and_bed_to_patient(@patient, params[:room_id], params[:bed_id])
        end
        format.html { redirect_to patients_path, notice: 'Patient was successfully updated.' }
        format.json { render :show, status: :ok, location: @patient }
      else
        format.html { render :edit }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /patients/1
  # DELETE /patients/1.json
  def destroy
    @patient.destroy
    respond_to do |format|
      format.html { redirect_to patients_url, notice: 'Patient was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  def inpatients
    @inpatients = Patient.where(patient_type: :inpatient)
  end

  def outpatients
    @outpatients = Patient.where(patient_type: :outpatient)
  end
  
  def edit_inpatient
  end

  def update_inpatient
    respond_to do |format|
      if @patient.update(inpatient_params)
        if @patient.inpatient?
          @patient.map_room_and_bed_to_patient(@patient, params[:room_id], params[:bed_id])
        end
        format.html { redirect_to inpatients_path, notice: 'Patient was successfully updated.' }
        format.json { render :show, status: :ok, location: @patient }
      else
        format.html { render :edit }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient
      @patient = Patient.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def patient_params
      params.require(:patient).permit(:first_name, :last_name, :email, :registration_status, :address_line1, 
        :address_line2, :phone_number, :country, :state, :city, :pincode, :gender, :age, :blood_group, 
        :patient_type, :nurse_id, incharge_doctor_ids: [],
        appointments_attributes: [:doctor_id, :start_time, :end_time, :appointment_type, :status, :patient_id])
    end

    def inpatient_params
      params.require(:patient).permit(:nurse_id, incharge_doctor_ids: [])
    end
end
