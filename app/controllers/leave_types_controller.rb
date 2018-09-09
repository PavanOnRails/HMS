class LeaveTypesController < ApplicationController
	layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_leave_type, only: [:edit, :update, :destroy]

  def index
    @leave_types = LeaveType.all
  end

  def new
    @leave_type = LeaveType.new
  end

  def create
    @leave_type = LeaveType.new(leave_type_params)

    respond_to do |format|
      if @leave_type.save
        format.html { redirect_to leave_types_path, notice: 'Leave Type was successfully created.' }
        format.json { render :show, status: :created, location: @leave_type }
      else
        format.html { render :new }
        format.json { render json: @leave_type.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @leave_type.update(leave_type_params)
        format.html { redirect_to leave_types_path, notice: 'Leave Type was successfully updated.' }
        format.json { render :show, status: :ok, location: @leave_type }
      else
        format.html { render :edit }
        format.json { render json: @leave_type.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @leave_type.destroy
    respond_to do |format|
      format.html { redirect_to leave_types_url, notice: 'Leave Type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_leave_type
    @leave_type = LeaveType.find(params[:id])
  end

  def leave_type_params
    params.require(:leave_type).permit(:name, :short_name, :description, :gender, :marital_status, :is_paid_leave)
  end
end
