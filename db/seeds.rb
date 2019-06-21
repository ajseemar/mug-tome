# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Months = {
    "Jan" => "01",
    "Feb" => "02",
    "Mar" => "03",
    "Apr" => "04",
    "May" => "05",
    "Jun" => "06",
    "Jul" => "07",
    "Aug" => "08",
    "Sep" => "09",
    "Oct" => "10",
    "Nov" => "11",
    "Dec" => "12"
}

Faker::UniqueGenerator.clear

User.create({first_name: "Ajay", last_name: "Seemar", email: "ajseemar@gmail.com", password: "password", date_of_birth: "1995-12-14", gender: "Male"})
User.create({first_name: "Alexander", last_name: "Jonathan", email: "email@domain.com", password: "password", date_of_birth: "1995-01-01", gender: "Male"})

100.times do 
    name = Faker::Name.unique.name.split(' ')
    email = "#{name[0]}#{name[1]}@domain.com"
    password = "password"
    date_of_birth = Faker::Date.birthday(6, 120)
    # date_of_birth[1] = Months[date_of_birth[1]]
    gender = ["Male", "Female"].sample

    User.create({
        first_name: name[0],
        last_name: name[1],
        email: email,
        password: password,
        date_of_birth: "#{date_of_birth.year}-#{date_of_birth.month}-#{date_of_birth.day}",
        gender: gender
    })
end

Faker::UniqueGenerator.clear