# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  ticker_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Watchlist < ApplicationRecord

    belongs_to :ticker,
    primary_key: :id,
    foreign_key: :ticker_id,
    class_name: 'Ticker'

    belongs_to :user

end
