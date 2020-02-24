export const fetchIPOs = () => {
    return $.ajax({
        method: "GET", 
        url: `https://cloud.iexapis.com/stable/stock/market/upcoming-ipos?token=${window.iexAPIKey}`
    })
}