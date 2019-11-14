export const fetchAnalystRatings = (symbol) => {
    return $.ajax({
        method: "GET", 
        url: `https://cloud.iexapis.com/stable/stock/${symbol}/recommendation-trends?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
        // url: `https://sandbox.iexapis.com/stable/stock/${symbol}/recommendation-trends?token=Tsk_06d36047391b4a858da339d6976a3238`
    })
}