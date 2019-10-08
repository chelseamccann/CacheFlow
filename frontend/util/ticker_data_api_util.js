// IEX
export const fetchTickerDaily = symbol => (
    $.ajax({
        method: "GET",
        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/intraday-prices?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)

export const fetchWeekly = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/5dm?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)

export const fetchOneMonth = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/1mm?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)


export const fetchThreeMonth = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/3m?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)


export const fetchOneYear = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/1y?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)

export const fetchFiveYear = symbol => (
    $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/5y?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
)

//INTRINIO
// export const fetchTickerData = (symbol) => (
//     $.ajax({
//         method: "GET",
//         url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday?source=iex&start_date=2019-10-04&start_time=13&api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
//     })
// )



export const fetchTickerData = (props, intradayPrices = []) => {
    const { symbol, next_page, callback } = props
    let next = next_page ? `&next_page=${next_page}` : '';
    let key = 'OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi'
    let date = new Date()
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    return $.ajax({
        method: "GET",
        url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday?source=iex&start_date=${date}&start_time=13&api_key=${key}${next}`,
        success: response => { 
            intradayPrices.push(...response.intraday_prices)
            if (response.next_page !== null) { 
                return fetchTickerData({symbol: symbol, next_page: response.next_page, callback: callback}, intradayPrices)
            } else {
                callback(intradayPrices)
            }
        }
    })
}





export const fetchTickerInfo = (symbol) => (
    $.ajax({
        method: "GET",

        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/company?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        // url: `https://cloud.iexapis.com/stable/stock/${symbol}/company?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
        url: `https://api-v2.intrinio.com/companies/${symbol}?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
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


