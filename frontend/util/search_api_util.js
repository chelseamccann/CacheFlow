export const fetchFromAPI = (query) => {
    return $.ajax({
        method: "GET", 
        url: `https://cloud.iexapis.com/stable/stock/${query}/quote?token=${window.iexAPIKey}`
    })
}


export const fetchAllFromAPI = (query) => {
    return $.ajax({
        method: "GET",
        url: `https://cloud.iexapis.com/stable/search/${query}?token=${window.iexAPIKey}`
    })
}