# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#create super admin
Staff.create(first_name: "Vasu", last_name: "Kare", email: "vasu.kare@gmail.com", super_admin: true, accessible_department_ids: [1,2,3,4,5,6], department_id: 5)

#create admin
Staff.create(first_name: "Pavan", last_name: "Kumar", email: "pavan.kumar@gmail.com", admin: true, accessible_department_ids: [1,2,5], department_id: 5)

#create 10 doctors
10.times do|n|
	Doctor.create(first_name: "doctor#{n}", last_name: "record#{n}", email: "doctor#{n}.record#{n}@gmail.com", phone_number: "987456123#{n}")
end

#create 10 outpatients
10.times do|n|
	Patient.create(first_name: "patient#{n}", last_name: "record#{n}", email: "patient#{n}.record#{n}@gmail.com", phone_number: "123456789#{n}",
		registration_status: :registration_done, patient_type: :outpatient)
end

#create departments
Department.create(name: "Outpatient Department", short_name: "OPD")
Department.create(name: "Inpatient Department", short_name: "IPD")
Department.create(name: "Blood Bank", short_name: "BB")
Department.create(name: "Lab", short_name: "Lab")
Department.create(name: "Human Resources", short_name: "HR")
Department.create(name: "Pharmacy", short_name: "Pharmacy")

#create reports
Report.create(name: "Employee Details Report", description: "This report shows the employee details for a given period of time", department_id: 5, report_type: 2, short_name: "EDR")