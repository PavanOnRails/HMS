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

ActiveRecord::Schema.define(version: 20180801065344) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.integer  "status",             default: 0
    t.integer  "appointment_type"
    t.integer  "doctor_id"
    t.integer  "patient_id"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.text     "reason_for_decline"
    t.datetime "start_time"
    t.datetime "end_time"
  end

  create_table "beds", force: :cascade do |t|
    t.string   "bed_no"
    t.integer  "ward_id"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "patient_id"
    t.integer  "status",     default: 0
    t.integer  "room_id"
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

  create_table "blood_banks", force: :cascade do |t|
    t.string   "name"
    t.text     "address"
    t.string   "phone_number"
    t.integer  "hospital_id"
    t.string   "incharge"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "blood_donors", force: :cascade do |t|
    t.string   "name"
    t.text     "address"
    t.string   "phone_number"
    t.integer  "blood_group_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "blood_groups", force: :cascade do |t|
    t.string   "name"
    t.string   "rh_factor"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "departments", force: :cascade do |t|
    t.string   "name"
    t.string   "HOD"
    t.integer  "hospital_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "short_name"
  end

  create_table "doctor_sessions", force: :cascade do |t|
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.time     "start_time"
    t.time     "end_time"
    t.integer  "doctor_id"
    t.integer  "patient_id"
    t.integer  "session_status",      default: 0
    t.boolean  "lab_tests_suggested", default: false
  end

  create_table "doctors", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.integer  "age"
    t.string   "phone_number"
    t.string   "designation"
    t.string   "highest_education"
  end

  create_table "floors", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hospitals", force: :cascade do |t|
    t.string   "name"
    t.string   "address_line1"
    t.string   "address_line2"
    t.string   "state"
    t.string   "city"
    t.string   "country"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "lab_test_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lab_tests", force: :cascade do |t|
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "lab_test_type_id"
    t.integer  "patient_id"
  end

  create_table "nurses", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "designation"
    t.integer  "age"
    t.string   "phone_number"
    t.string   "email"
    t.string   "highest_education"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "patients", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
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
    t.integer  "patient_type"
    t.integer  "nurse_id"
    t.integer  "incharge_doctor_ids", default: [],              array: true
    t.integer  "inpatient_status",    default: 0
    t.datetime "discharge_date"
  end

  create_table "rooms", force: :cascade do |t|
    t.string   "room_no"
    t.integer  "room_type"
    t.integer  "capacity"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "ward_id"
    t.integer  "patient_id"
    t.integer  "status",     default: 0
  end

  create_table "staffs", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.integer  "age"
    t.string   "phone_number"
    t.string   "designation"
    t.string   "highest_education"
    t.boolean  "admin",                     default: false
    t.boolean  "employee",                  default: true
    t.boolean  "super_admin",               default: false
    t.integer  "accessible_department_ids", default: [],                 array: true
    t.integer  "department_id"
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
    t.integer  "user_type"
    t.integer  "doctor_id"
    t.integer  "appointment_type"
    t.integer  "age"
    t.string   "phone_number"
    t.string   "uhid"
    t.integer  "registration_status"
    t.string   "password_digest"
    t.datetime "start_time"
    t.datetime "end_time"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "wards", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "no_of_rooms"
  end

end
