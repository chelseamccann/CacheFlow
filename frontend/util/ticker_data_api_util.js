//INTRINIO
// export const fetchTickerData = (symbol) => (
//     $.ajax({
//         method: "GET",
//         url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday?source=iex&start_date=2019-10-04&start_time=13&api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
//     })
// )

export const fetchTickerData = (props, intradayPrices = []) => {
    const { symbol, next_page, callback } = props
    console.log(symbol)
    console.log(next_page)
    console.log(callback)
    // debugger
    let next = next_page ? `&next_page=${next_page}` : '';
    let key = 'OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi'
    let date = new Date()
    date = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    // debugger
    return $.ajax({
        method: "GET",
        // url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday/?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi${next}`,
        url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday?source=iex&start_date=${date}&start_time=13&api_key=${key}${next}`,
        success: response => { 
            // debugger
            intradayPrices.push(...response.intraday_prices)
            if (response.next_page !== null) { 
                return fetchTickerData({symbol: symbol, next_page: response.next_page, callback: callback}, intradayPrices)
            } else {
                debugger
                callback(intradayPrices)
            }
        }
    })
    // }).then(response => { 
    //     // debugger
    //     arr.push(response)
    //     // debugger
    //     if (response.next_page !== null) { 
    //         // debugger
    //         return fetchTickerData(symbol, response.next_page, arr)
    //     } else {
    //         debugger
    //         return arr
    //     }
    // })
}






//IEX
// export const fetchTickerData = symbol => (
//     $.ajax({
//         method: "GET",
//         url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
//     })
// )




export const fetchTickerInfo = (symbol) => (
    $.ajax({
        method: "GET",
        url: `https://api-v2.intrinio.com/companies/${symbol}?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
    })
)