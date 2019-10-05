export const fetchTickers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/tickers'
    })
)


export const fetchTicker = id => (
    $.ajax({
        method: 'GET',
        url: `api/tickers/${id}`
    })
)