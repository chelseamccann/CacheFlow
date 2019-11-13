# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ticker.destroy_all
Transaction.destroy_all
Watchlist.destroy_all
User.destroy_all

user = User.create!(email: "JordanBelfort@w.com", password: "password123", buying_power: 1000000)

ticker1 = Ticker.create!(symbol: "AAPL", num_shares: 2) 
t1 = Transaction.new(ticker_symbol: "AAPL", purchase_price: 251.30, purchase_shares: 2, buy: true, ticker_id: ticker1.id, user_id: user.id)
t1.update_attributes(created_at: "2019-11-01T12:18:49.616Z", updated_at: "2019-11-01T12:18:49.616Z")
t1.save!


ticker2 = Ticker.create!(symbol: "FB", num_shares: 2)
t2 = Transaction.new(ticker_symbol: "FB", purchase_price: 251.30, purchase_shares: 2, buy: true, ticker_id: ticker2.id, user_id: user.id)
t2.update_attributes(created_at: "2019-4-01T12:18:49.616Z", updated_at: "2019-4-01T12:18:49.616Z")
t2.save!

ticker3 = Ticker.create!(symbol: "GOOG", num_shares: 1)
t3 = Transaction.new(ticker_symbol: "GOOG", purchase_price: 251.30, purchase_shares: 2, buy: true, ticker_id: ticker3.id, user_id: user.id)
t3.update_attributes(created_at: "2019-7-01T12:18:49.616Z", updated_at: "2019-7-01T12:18:49.616Z")
t3.save!

ticker4 = Ticker.create!(symbol: "NKE", num_shares: 12)
t4 = Transaction.new(ticker_symbol: "NKE", purchase_price: 251.30, purchase_shares: 2, buy: true, ticker_id: ticker4.id, user_id: user.id)
t4.update_attributes(created_at: "2019-10-23T12:18:49.616Z", updated_at: "2019-10-23T12:18:49.616Z")
t4.save!

ticker5 = Ticker.create!(symbol: "RCL", num_shares: 5)
t5 = Transaction.new(ticker_symbol: "RCL", purchase_price: 251.30, purchase_shares: 2, buy: true, ticker_id: ticker5.id, user_id: user.id)
t5.update_attributes(created_at: "2019-11-04T12:18:49.616Z", updated_at: "2019-11-04T12:18:49.616Z")
t5.save!

# Ticker.create!(symbol: "CROX", num_shares: 2)
# Ticker.create!(symbol: "MSFT", num_shares: 8)
# Ticker.create!(symbol: "CRM", num_shares: 5)
# Ticker.create!(symbol: "LYFT", num_shares: 3)
# Ticker.create!(symbol: "OSTK", num_shares: 4)

