export const fetchIPOs = () => {
    return $.ajax({
        method: "GET", 
        url: `https://cloud.iexapis.com/stable/stock/market/upcoming-ipos?token=pk_e32159988e5d4975aa0fd513e43d76f9`
        // url: `https://sandbox.iexapis.com/stable/stock/market/upcoming-ipos?token=Tsk_06d36047391b4a858da339d6976a3238`
    })
}