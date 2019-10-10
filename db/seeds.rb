# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ticker.destroy_all
User.destroy_all

User.create!(email: "JordanBelfort@w.com", password: "password123")

Ticker.create!(symbol: "AAPL")
Ticker.create!(symbol: "FB")
Ticker.create!(symbol: "GOOG")
Ticker.create!(symbol: "NKE")
Ticker.create!(symbol: "RCL")
Ticker.create!(symbol: "CROX")
Ticker.create!(symbol: "MSFT")
Ticker.create!(symbol: "CRM")
Ticker.create!(symbol: "LYFT")
Ticker.create!(symbol: "OSTK")