class BloodGroupsController < ApplicationController
	layout 'gentellela_theme', only: [:index, :new, :edit]
  before_action :set_blood_group, only: [:edit, :update, :destroy]

  def index
    @blood_groups = BloodGroup.all
  end

  def new
    @blood_group = BloodGroup.new
  end

  def create
    @blood_group = BloodGroup.new(blood_group_params)

    respond_to do |format|
      if @blood_group.save
        format.html { redirect_to blood_groups_path, notice: 'Blood Group was successfully created.' }
        format.json { render :show, status: :created, location: @blood_group }
      else
        format.html { render :new }
        format.json { render json: @blood_group.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @blood_group.update(blood_group_params)
        format.html { redirect_to blood_groups_path, notice: 'Blood Group was successfully updated.' }
        format.json { render :show, status: :ok, location: @blood_group }
      else
        format.html { render :edit }
        format.json { render json: @blood_group.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @blood_group.destroy
    respond_to do |format|
      format.html { redirect_to blood_groups_url, notice: 'Blood Group was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  def set_blood_group
    @blood_group = BloodGroup.find(params[:id])
  end

  def blood_group_params
    params.require(:blood_group).permit(:name, :rh_factor)
  end
end
