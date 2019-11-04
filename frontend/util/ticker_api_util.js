export const APIfetchTickers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tickers'
    })
)


export const APIfetchTicker = tickerSymbol => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `api/tickers/${tickerSymbol}`
    })
}