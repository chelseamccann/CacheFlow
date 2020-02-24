export const fetchFromAPI = (query) => {
    return $.ajax({
        method: "GET", 
        // url: `https://sandbox.iexapis.com/stable/stock/${query}/quote?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        url: `https://cloud.iexapis.com/stable/stock/${query}/quote?token=pk_e32159988e5d4975aa0fd513e43d76f9`
    })
}


export const fetchAllFromAPI = (query) => {
    return $.ajax({
        method: "GET",
        // url: `https://sandbox.iexapis.com/stable/search/${query}?token=Tpk_4ca09027bbda4ce1a28d8e1702fafdaa`
        url: `https://cloud.iexapis.com/stable/search/${query}?token=pk_e32159988e5d4975aa0fd513e43d76f9`
    })
}