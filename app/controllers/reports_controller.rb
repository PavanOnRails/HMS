class ReportsController < ApplicationController
  layout 'gentellela_theme', except: [:preview]
  before_action :set_report, only: [:edit, :update, :destroy]

  def index
    @reports = Report.all
  end

  def new
    @report = Report.new
  end

  def create
    @report = Report.new(report_params)

    respond_to do |format|
      if @report.save
        format.html { redirect_to reports_path, notice: 'Report was successfully created.' }
        format.json { render :show, status: :created, location: @report }
      else
        format.html { render :new }
        format.json { render json: @report.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @report.update(report_params)
        format.html { redirect_to reports_path, notice: 'Report was successfully updated.' }
        format.json { render :show, status: :ok, location: @report }
      else
        format.html { render :edit }
        format.json { render json: @report.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @report.destroy
    respond_to do |format|
      format.html { redirect_to reports_url, notice: 'Report was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  def preview
    @staff = Staff.all
  end
  
  Report.pluck(:name).each do |name|
    define_method(name.gsub(/\s+/, "").underscore) do
      @edr_rows = Staff.column_names - ["id", "created_at", "updated_at", "admin", "employee", "super_admin", "accessible_department_ids"]
    end
  end
  
  def report_filters
    @report_title = params[:report]
    @headers = params[:report_filters]
    if params[:report] == "employee_details_report"
      symbolized_params = params[:report_filters].map(&:to_sym)
      @data = Staff.select(symbolized_params)
    end

    respond_to do |format|
      format.html
      format.js
    end
  end

  private
  def set_report
    @report = Report.find(params[:id])
  end

  def report_params
    params.require(:report).permit(:name, :description, :report_type, :patient_id, :doctor_id, :department_id, :staff_id)
  end
end
