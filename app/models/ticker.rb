# == Schema Information
#
# Table name: tickers
#
#  id         :bigint           not null, primary key
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ticker < ApplicationRecord 

    validates :symbol, presence: true

    has_many :transactions

end
