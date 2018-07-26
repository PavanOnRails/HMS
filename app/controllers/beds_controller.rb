class BedsController < ApplicationController
  layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_bed, only: [:edit, :update, :destroy]

  def index
    @beds = Bed.all
  end

  def new
    @bed = Bed.new
  end

  def create
    @bed = Bed.new(bed_params)

    respond_to do |format|
      if @bed.save
        format.html { redirect_to beds_path, notice: 'Bed was successfully created.' }
        format.json { render :show, status: :created, location: @bed }
      else
        format.html { render :new }
        format.json { render json: @bed.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @bed.update(bed_params)
        format.html { redirect_to beds_path, notice: 'Bed was successfully updated.' }
        format.json { render :show, status: :ok, location: @bed }
      else
        format.html { render :edit }
        format.json { render json: @bed.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @bed.destroy
    respond_to do |format|
      format.html { redirect_to beds_url, notice: 'Bed was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_bed
    @bed = Bed.find(params[:id])
  end

  def bed_params
    params.require(:bed).permit(:bed_no, :ward_id, :room_id)
  end
end
