export const fetchTickerData = symbol => (
    $.ajax({
        method: "GET",
        url: `https://api-v2.intrinio.com/companies?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
        // url: `https://api-v2.intrinio.com/stock_exchanges/NYSE/prices/realtime/${symbol}?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
    })
)
