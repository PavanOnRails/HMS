class StaffsController < ApplicationController
  layout 'gentellela_theme', only: [:index, :new, :edit, :admins, :super_admins]
  before_action :set_staff, only: [:show, :edit, :update, :destroy]

  # GET /staffs
  # GET /staffs.json
  def index
    @staffs = Staff.where(employee: true)
  end

  # GET /staffs/1
  # GET /staffs/1.json
  def show
  end

  # GET /staffs/new
  def new
    @staff = Staff.new
  end

  # GET /staffs/1/edit
  def edit
  end

  # POST /staffs
  # POST /staffs.json
  def create
    @staff = Staff.new(staff_params)

    respond_to do |format|
      if @staff.save
        format.html { redirect_to staffs_path, notice: 'Staff was successfully created.' }
        format.json { render :show, status: :created, location: @staff }
      else
        format.html { render :new }
        format.json { render json: @staff.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /staffs/1
  # PATCH/PUT /staffs/1.json
  def update
    respond_to do |format|
      if @staff.update(staff_params)
        format.html { redirect_to staffs_path, notice: 'Staff was successfully updated.' }
        format.json { render :show, status: :ok, location: @staff }
      else
        format.html { render :edit }
        format.json { render json: @staff.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /staffs/1
  # DELETE /staffs/1.json
  def destroy
    @staff.destroy
    respond_to do |format|
      format.html { redirect_to staffs_url, notice: 'Staff was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  def admins
    @staffs = Staff.where(admin: true)
  end

  def super_admins
    @staffs = Staff.where(super_admin: true)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_staff
      @staff = Staff.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def staff_params
      params.require(:staff).permit(:first_name, :last_name, :email, :age, :designation, :phone_number)
    end
end
