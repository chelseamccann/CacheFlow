# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create!(email: "JordanBelfort@w.com", password: "password123", buying_power: 20.02)

ticker1 = Ticker.create!(symbol: "AAPL")
ticker2 = Ticker.create!(symbol: "GOOGL")
ticker3 = Ticker.create!(symbol: "GOOG")
ticker4 = Ticker.create!(symbol: "NKE")
ticker5 = Ticker.create!(symbol: "RCL")
ticker6 = Ticker.create!(symbol: "CROX")
ticker7 = Ticker.create!(symbol: "MSFT")
ticker8 = Ticker.create!(symbol: "CRM")
ticker9 = Ticker.create!(symbol: "LYFT")
ticker10 = Ticker.create!(symbol: "OSTK")