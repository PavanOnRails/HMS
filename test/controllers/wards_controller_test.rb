require 'test_helper'

class WardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get wards_index_url
    assert_response :success
  end

  test "should get new" do
    get wards_new_url
    assert_response :success
  end

  test "should get create" do
    get wards_create_url
    assert_response :success
  end

  test "should get edit" do
    get wards_edit_url
    assert_response :success
  end

  test "should get update" do
    get wards_update_url
    assert_response :success
  end

  test "should get destroy" do
    get wards_destroy_url
    assert_response :success
  end

end
