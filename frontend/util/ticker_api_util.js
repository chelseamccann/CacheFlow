export const APIfetchTickers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tickers'
    })
)


export const APIfetchTicker = tickerSymbol => {
    return $.ajax({ 
        method: 'GET',
        url: `api/tickers/${tickerSymbol}`
    })
}