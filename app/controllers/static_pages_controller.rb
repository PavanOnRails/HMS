class StaticPagesController < ApplicationController
	skip_before_action :authorize
	
	def home
	end

	def get_states
		@states = CS.states(params[:country])
		render json: @states
	end

	def get_cities
		@cities = CS.cities(params[:state], params[:country])
		render json: @cities
	end
  
  def get_rooms
		@ward = Ward.find(params[:ward])
		@rooms = @ward.rooms
		render json: @rooms
	end

	def get_beds
		@room = Room.find(params[:ward])
		@beds = @room.beds.where(status: :vacant)
		render json: @beds
	end
end
