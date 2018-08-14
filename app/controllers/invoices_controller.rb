class InvoicesController < ApplicationController
	layout 'gentellela_theme', only: [:index, :new, :edit]
	before_action :set_invoice, only: [:show, :edit, :update, :destroy]
  before_action :set_patient, only: [:new, :edit]

  # GET /invoices
  # GET /invoices.json
  def index
    @invoices = Invoice.all
  end

  # GET /invoices/1
  # GET /invoices/1.json
  def show
  end

  # GET /invoices/new
  def new
    @invoice = @patient.invoice ? @patient.invoice : @patient.build_invoice
    @invoice_items = @invoice.invoice_items ? @invoice.invoice_items : @invoice.invoice_items.build
    @bill = @invoice.bill ? @invoice.bill : @invoice.build_bill
  end

  # GET /invoices/1/edit
  def edit
  end

  # POST /invoices
  # POST /invoices.json
  def create
    @invoice = Invoice.new(invoice_params)
    @patient = Patient.find(params[:invoice][:patient_id])

    respond_to do |format|
      if @invoice.save
        format.html { redirect_to outpatients_path, notice: 'Invoice was successfully created.' }
        format.json { render :show, status: :created, location: @invoice }
      else
        format.html { render :new }
        format.json { render json: @invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /invoices/1
  # PATCH/PUT /invoices/1.json
  def update
    respond_to do |format|
      if @invoice.update(invoice_params)
        format.html { redirect_to outpatients_path, notice: 'invoice was successfully updated.' }
        format.json { render :show, status: :ok, location: @invoice }
      else
        format.html { render :edit }
        format.json { render json: @invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /invoices/1
  # DELETE /invoices/1.json
  def destroy
    @invoice.destroy
    respond_to do |format|
      format.html { redirect_to invoices_url, notice: 'invoice was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_invoice
      @invoice = Invoice.find(params[:id])
    end

    def set_patient
      @patient = Patient.find(params[:patient_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def invoice_params
      params.require(:invoice).permit(:patient_id, :invoice_no, invoice_items_attributes: [:id, :item_name, :price, :quantity, :total, :invoice_id, :_destroy], bill_attributes: [:id, :sub_total, :tax, :discount, :grand_total, :patient_id, :invoice_id, :paid_with, :amount_paid, :amount_due])
    end
end
