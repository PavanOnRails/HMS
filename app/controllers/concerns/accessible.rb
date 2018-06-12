module Accessible
  extend ActiveSupport::Concern
  included do
    before_action :user_redirection_url
  end

  protected
  def user_redirection_url
    return new_user_session_url unless user_signed_in?
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