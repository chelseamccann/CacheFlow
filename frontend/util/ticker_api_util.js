export const APIfetchTickers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tickers'
    })
)


export const APIfetchTicker = id => (
    $.ajax({
        method: 'GET',
        url: `api/tickers/${id}`
    })
)