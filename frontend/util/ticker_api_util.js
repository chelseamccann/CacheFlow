export const fetchTickers = data => (
    $.ajax({
        method: 'GET',
        url: 'api/tickers',
        data
    })
)


export const fetchTicker = id => (
    $.ajax({
        method: 'GET',
        url: `api/tickers/${id}`
    })
)