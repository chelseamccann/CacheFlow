export const fetchFromAPI = (query) => {
    return $.ajax({
        method: "GET", 
        url: `https://sandbox.iexapis.com/stable/stock/${query}/quote?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        // url: `https://cloud.iexapis.com/stable/stock/${query}/quote?token=pk_b6f890a95fb24dbfb1a85f362fe5687f`
    })
}


export const fetchAllFromAPI = (query) => {
    return $.ajax({
        method: "GET",
        url: `https://sandbox.iexapis.com/stable/search/${query}?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`

        // url: `https://sandbox.iexapis.com/stable/ref-data/symbols?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        // url: `https://sandbox.iexapis.com/stable/ref-data/iex/symbols?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
    })
}