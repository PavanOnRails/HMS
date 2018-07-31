# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#create 10 doctors
10.times do|n|
	Doctor.create(first_name: "doctor#{n}", last_name: "record#{n}", email: "doctor#{n}.record#{n}@gmail.com", phone_number: "987456123#{n}")
end

#create 10 outpatients
10.times do|n|
	Patient.create(first_name: "patient#{n}", last_name: "record#{n}", email: "patient#{n}.record#{n}@gmail.com", phone_number: "123456789#{n}",
		registration_status: :registration_done, patient_type: :outpatient)
end