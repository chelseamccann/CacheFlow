// IEX
export const fetchDailyPrices = symbol => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=${window.iexAPIKey}`
    })
)

export const fetchPrices = (symbol, timeFrame) => {
    return $.ajax({
        method: "GET", 
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=${window.iexAPIKey}`,
    })
}



export const fetchTickerInfo = (symbol) => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=${window.iexAPIKey}`
    })
)

export const fetchTickerStats = (symbol) => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/stats?token=${window.iexAPIKey}` //{stat?}`
    })
)


