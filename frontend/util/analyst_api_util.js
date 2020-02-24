export const fetchAnalystRatings = (symbol) => {
    debugger
    return $.ajax({
        method: "GET", 
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/recommendation-trends?token=${window.iexAPIKey}`
    })
}