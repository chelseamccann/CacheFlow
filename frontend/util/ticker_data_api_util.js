export const fetchTickerData = symbol => (
    $.ajax({
        method: "GET",
        url: `https://api-v2.intrinio.com/securities/${symbol}/prices/intraday/?api_key=OjRkMWNmYTA3ZWU4MjA0M2MzN2ZjODlkYWM0Yzc3OWNi`
    })
)
