class DocumentsController < ApplicationController
	layout 'gentellela_theme'
	
  def import
  	Document.import(params[:file], params[:class_name])
  	respond_to do | format |
  		format.html
  		format.js
  	end
  end

  def export
  end

  def generate_pdf
  end
end
