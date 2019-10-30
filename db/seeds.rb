# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ticker.destroy_all
User.destroy_all
Transaction.destroy_all

User.create!(email: "JordanBelfort@w.com", password: "password123", buying_power: 1000000)

Ticker.create!(symbol: "AAPL", num_shares: 2)
Ticker.create!(symbol: "FB", num_shares: 2)
Ticker.create!(symbol: "GOOG", num_shares: 1)
Ticker.create!(symbol: "NKE", num_shares: 12)
Ticker.create!(symbol: "RCL", num_shares: 5)
Ticker.create!(symbol: "CROX", num_shares: 2)
Ticker.create!(symbol: "MSFT", num_shares: 8)
Ticker.create!(symbol: "CRM", num_shares: 5)
Ticker.create!(symbol: "LYFT", num_shares: 3)
Ticker.create!(symbol: "OSTK", num_shares: 4)