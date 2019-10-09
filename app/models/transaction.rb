# == Schema Information
#
# Table name: transactions
#
#  id              :bigint           not null, primary key
#  purchase_shares :integer          not null
#  purchase_price  :float            not null
#  total_shares    :integer          not null
#  average_price   :float            not null
#  user_id         :integer          not null
#  ticker_id       :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Transaction < ApplicationRecord

    validates :purchase_shares, :purchase_price, presence: true 
    
    
    belongs_to :user
    belongs_to :ticker

end
