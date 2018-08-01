class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :authorize
  helper_method :current_user, :current_staff, :current_staff_departments, :current_department

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def current_staff
    @current_staff ||= Staff.find_by(email: current_user.email)
  end
  
  def current_staff_departments
    @current_staff_departments ||= Department.where(id: current_staff.accessible_department_ids).where.not(id: current_department.try(:id))
  end
  
  def current_department
    @current_department ||= Department.find_by(id: session[:department_id])
  end

  def authorize
    redirect_to '/login' unless current_user
  end

  def user_redirection_url
    if current_user.staff?
      if current_staff.admin == true && !current_staff_departments.blank?
        session[:department_id] = current_staff_departments.first.id
        department_dashboard_url(current_staff, current_department)
      elsif current_staff.super_admin == true
        super_admin_dashboard_url(current_staff)
      else
        staff_dashboard_url(current_staff)
      end
    elsif current_user.doctor?
      doctors_dashboard_url(current_user)
    elsif current_user.patient?
      patients_dashboard_url(current_user)
    else 
      root_url
    end
  end
end
