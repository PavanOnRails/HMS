class WardsController < ApplicationController
  layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_ward, only: [:edit, :update, :destroy]

  def index
    @wards = Ward.all
  end

  def new
    @ward = Ward.new
  end

  def create
    @ward = Ward.new(ward_params)

    respond_to do |format|
      if @ward.save
        format.html { redirect_to wards_path, notice: 'Ward was successfully created.' }
        format.json { render :show, status: :created, location: @ward }
      else
        format.html { render :new }
        format.json { render json: @ward.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @ward.update(ward_params)
        format.html { redirect_to wards_path, notice: 'Ward was successfully updated.' }
        format.json { render :show, status: :ok, location: @ward }
      else
        format.html { render :edit }
        format.json { render json: @ward.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @ward.destroy
    respond_to do |format|
      format.html { redirect_to wards_url, notice: 'Ward was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_ward
    @ward = Ward.find(params[:id])
  end
  
  def ward_params
    params.require(:ward).permit(:name, :no_of_rooms)
  end
end
