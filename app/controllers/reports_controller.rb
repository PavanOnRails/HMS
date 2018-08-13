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
  
  def preview_and_export
    if request.post?
      @report_title = Report.find_by(short_name: params[:short_name]).name
      @headers = params[:report_filters]
      if params[:short_name] == "EDR"
        symbolized_params = params[:report_filters].map(&:to_sym)
        if !params[:from_date].blank? && !params[:to_date].blank?
          @data = Staff.select(symbolized_params).where(date_of_joining: params[:from_date]..params[:to_date])
        else
          @data = Staff.select(symbolized_params)
        end
      end
    elsif request.get?
      @title = params[:title]
      @headers = params[:headers]
      symbolized_params = @headers.map(&:to_sym)
      @data = Staff.select(symbolized_params)
    end

    respond_to do |format|
      format.html
      format.js
      format.pdf do
        render pdf: @title.gsub(/\s+/, "").underscore,
        disposition: "attachment",
        template: "reports/export_report.html.erb",
        layout: "report.html",
        locals: {title: @title, headers: @headers, data: @data}
      end
    end
  end

  private
  def set_report
    @report = Report.find(params[:id])
  end

  def report_params
    params.require(:report).permit(:name, :description, :report_type, :patient_id, :doctor_id, :department_id, :staff_id, :short_name)
  end
end
