require 'test_helper'

class DocumentsControllerTest < ActionDispatch::IntegrationTest
  test "should get import" do
    get documents_import_url
    assert_response :success
  end

  test "should get export" do
    get documents_export_url
    assert_response :success
  end

  test "should get generate_pdf" do
    get documents_generate_pdf_url
    assert_response :success
  end

end
