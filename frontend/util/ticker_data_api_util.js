// export const fetchTickerData = (symbol) => (
//     $.ajax({
//         method: "GET",
//         url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday/?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
//     })
// )

// export const fetchTickerData = (symbol, next_page) => {
//     let next;
//     if (next_page) {
//         next = `&next_page=${next_page}`
//     } else {
//         next = ''
//     }
//     // debugger
//     return $.ajax({
//         method: "GET",
//         url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday/?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi${next}`
//     }).then(response => { 
//         while (response.next_page !== null) { 
//             return fetchTickerData(symbol, response.next_page)
//         }
//     })
// }












export const fetchTickerData = symbol => (
    $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/intraday-prices?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
    })
)