export const fetchNews = () => {
    return $.ajax({
        method: "GET", 
        url: `https://newsapi.org/v2/everything?q=stockmarket&apiKey=f9c0700888a04dd7ba2d78e2fe32dfe7`
    })
}

export const fetchCompanyNews = (symbol) => {
    return $.ajax({
        method: "GET", 
        url: `https://newsapi.org/v2/everything?q=${symbol}&apiKey=f9c0700888a04dd7ba2d78e2fe32dfe7`
    })
}
