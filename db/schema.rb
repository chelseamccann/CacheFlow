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

ActiveRecord::Schema.define(version: 2019_11_07_223154) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tickers", force: :cascade do |t|
    t.string "symbol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num_shares", null: false
    t.index ["symbol"], name: "index_tickers_on_symbol", unique: true
  end

  create_table "transactions", force: :cascade do |t|
    t.integer "purchase_shares", null: false
    t.float "purchase_price", null: false
    t.integer "user_id", null: false
    t.string "ticker_symbol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ticker_id", null: false
    t.boolean "buy", null: false
    t.index ["user_id"], name: "index_transactions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.float "buying_power", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "total_portfolio_value", default: 0.0, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "ticker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "symbol", null: false
    t.integer "num_shares", null: false
  end

end
