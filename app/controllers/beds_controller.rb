class BedsController < ApplicationController
  layout 'gentellela_theme', only: [:index]
  before_action :set_bed, only: [:edit, :update, :destroy]

  def index
    @beds = Bed.all
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
