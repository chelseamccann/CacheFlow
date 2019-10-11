export const fetchNews = () => {
    return $.ajax({
        method: "GET", 
        url: `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f9c0700888a04dd7ba2d78e2fe32dfe7`
    })
}


// `https://newsapi.org/v2/everything?q=${symbol}&apiKey=f9c0700888a04dd7ba2d78e2fe32dfe7`