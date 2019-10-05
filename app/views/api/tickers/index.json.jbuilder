@tickers.each do |ticker|
    json.set! ticker.id do
        json.partial! 'api/tickers/ticker', ticker: ticker
    end
end