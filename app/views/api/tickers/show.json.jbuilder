json.ticker do 
    json.partial! '/api/tickers/ticker', ticker: @ticker
end