// IEX
export const fetchDailyPrices = symbol => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)

export const fetchPrices = (symbol, timeFrame) => {
    return $.ajax({
        method: "GET", 
        // url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=pk_b6f890a95fb24dbfb1a85f362fe5687f`,
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
}



export const fetchTickerInfo = (symbol) => (
    $.ajax({
        method: "GET",
        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
        // url: `https://api-v2.intrinio.com/companies/${symbol}?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
    })
)

export const fetchTickerStats = (symbol) => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/stats?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        // url: `https://cloud.iexapis.com/stable/stock/${symbol}/stats?token=pk_b6f890a95fb24dbfb1a85f362fe5687f` //{stat?}`
        // url: `https://api-v2.intrinio.com/companies/${symbol}?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
    })
)


