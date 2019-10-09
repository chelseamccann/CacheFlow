@transactions.each do |transaction|
    json.set! transaction.id do
        json.partial! 'api/tickers/transaction', transaction: transaction
    end
end