class AttendanceDetailsController < ApplicationController
	layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_attendance_detail, only: [:edit, :update, :destroy]

  def index
    @attendance_details = AttendanceDetail.where(attendance_date: Date.today)
  end

  def new
    @attendance_detail = AttendanceDetail.new
  end

  def create
    @attendance_detail = AttendanceDetail.new(attendance_detail_params)
    @attendance_detail.attendance_date = Date.today
    
    respond_to do |format|
      if @attendance_detail.save
        format.html { redirect_to attendance_details_path, notice: 'Attendance detail was successfully created.' }
        format.json { render :show, status: :created, location: @attendance_detail }
      else
        format.html { render :new }
        format.json { render json: @attendance_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @attendance_detail.update(attendance_detail_params)
        format.html { redirect_to attendance_details_path, notice: 'Attendance detail was successfully updated.' }
        format.json { render :show, status: :ok, location: @attendance_detail }
      else
        format.html { render :edit }
        format.json { render json: @attendance_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @attendance_detail.destroy
    respond_to do |format|
      format.html { redirect_to attendance_details_url, notice: 'Attendance detail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_attendance_detail
    @attendance_detail = AttendanceDetail.find(params[:id])
  end

  def attendance_detail_params
    params.require(:attendance_detail).permit(:in_time, :out_time, :attendance_date, :staff_id)
  end
end
