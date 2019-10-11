export const fetchFromAPI = (query) => {
    return $.ajax({
        method: "GET", 
        // url: `https://cloud.iexapis.com/stock/${symbol}/company`
        url: `https://sandbox.iexapis.com/stable/stock/${query}/quote?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        // url: `https://cloud.iexapis.com/stable/stock/${}/company&token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
        // url: `https://sandbox.iexapis.com/stable/stock/${query}/company&token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
}
// https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_b6f890a95fb24dbfb1a85f362fe5687f

// url: `https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=pk_b6f890a95fb24dbfb1a85f362fe5687f`,
// url: `https://sandbox.iexapis.com/stable/stock/${symbol}/chart/${timeFrame}?chartIEXOnly=true&token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
