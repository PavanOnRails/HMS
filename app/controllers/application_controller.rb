class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authorize
  helper_method :current_user, :current_staff

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def current_staff
    @current_staff ||= Staff.find_by(email: @current_user.email)
  end

  def authorize
    redirect_to '/login' unless current_user
  end

  def user_redirection_url
    if current_user.staff?
      staff_dashboard_url(current_user)
    elsif current_user.doctor?
      doctors_dashboard_url(current_user)
    elsif current_user.patient?
      patients_dashboard_url(current_user)
    else 
      root_url
    end
  end
end
