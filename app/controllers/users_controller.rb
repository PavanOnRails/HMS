class UsersController < ApplicationController
  skip_before_action :authorize, only: [:new, :create]
  
  def new
  end

  def create
  	user = User.new(user_params)
	  if user.save
	    session[:user_id] = user.id
	    redirect_to user_redirection_url
	  else
	    redirect_to '/signup'
	  end
  end

	private
  def user_params
  	params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :user_type, :appointment_type, :start_time, :end_time, :doctor_id, :phone_number, :registration_status, :image)
  end
end
