# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180621074127) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.datetime "appointment_date"
    t.integer  "status"
    t.integer  "appointment_type"
    t.integer  "doctor_id"
    t.integer  "patient_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.text     "reason_for_decline"
  end

  create_table "bill_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bill_types_bills", id: false, force: :cascade do |t|
    t.integer "bill_id",      null: false
    t.integer "bill_type_id", null: false
    t.index ["bill_id", "bill_type_id"], name: "index_bill_types_bills_on_bill_id_and_bill_type_id", using: :btree
    t.index ["bill_type_id", "bill_id"], name: "index_bill_types_bills_on_bill_type_id_and_bill_id", using: :btree
  end

  create_table "bills", force: :cascade do |t|
    t.decimal  "registration_fee", precision: 10, scale: 2
    t.decimal  "doctor_fee",       precision: 10, scale: 2
    t.decimal  "pharmacy_bill",    precision: 10, scale: 2
    t.decimal  "maintenance_fee",  precision: 10, scale: 2
    t.decimal  "tax",              precision: 10, scale: 2
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.integer  "patient_id"
    t.integer  "paid_with"
    t.integer  "bill_type"
    t.decimal  "aggregated_total", precision: 10, scale: 2
  end

  create_table "doctor_sessions", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.time     "start_time"
    t.time     "end_time"
  end

  create_table "doctors", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lab_test_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lab_test_types_tests", id: false, force: :cascade do |t|
    t.integer "lab_test_id",      null: false
    t.integer "lab_test_type_id", null: false
    t.index ["lab_test_id", "lab_test_type_id"], name: "index_lab_test_types_tests_on_lab_test_id_and_lab_test_type_id", using: :btree
    t.index ["lab_test_type_id", "lab_test_id"], name: "index_lab_test_types_tests_on_lab_test_type_id_and_lab_test_id", using: :btree
  end

  create_table "lab_tests", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.integer  "age"
    t.string   "phone_number"
    t.string   "uhid"
    t.integer  "registration_status"
    t.string   "address_line1"
    t.string   "address_line2"
    t.string   "pincode"
    t.string   "country"
    t.string   "state"
    t.string   "city"
    t.string   "gender"
    t.string   "blood_group"
  end

  create_table "staffs", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "age"
    t.string   "phone_number"
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "password"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.integer  "role",                   default: 0
    t.string   "type"
    t.integer  "user_type"
    t.integer  "doctor_id"
    t.integer  "appointment_type"
    t.datetime "appointment_date"
    t.integer  "age"
    t.string   "phone_number"
    t.string   "uhid"
    t.integer  "registration_status"
    t.string   "password_digest"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
