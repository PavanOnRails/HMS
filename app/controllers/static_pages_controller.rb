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

	def get_beds
		@ward = Ward.find(params[:ward])
		@beds = @ward.beds.where(status: :vacant)
		render json: @beds
	end
end
