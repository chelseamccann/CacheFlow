# == Schema Information
#
# Table name: transactions
#
#  id              :bigint           not null, primary key
#  purchase_shares :integer          not null
#  purchase_price  :float            not null
#  user_id         :integer          not null
#  ticker_symbol   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  ticker_id       :integer          not null
#

class Transaction < ApplicationRecord
    
    validates :ticker_symbol, :purchase_shares, :purchase_price, :buy, presence: true 
    
    belongs_to :user

    belongs_to :ticker,
    primary_key: :id,
    foreign_key: :ticker_id,
    class_name: 'Ticker'

end
