export const fetchWatchlistItems = () => {
    return $.ajax({
        method: "GET",
        url: "/api/watchlists",
      });
}

export const createWatchlistItem = (item) => {
    return $.ajax({
      method: "POST",
      url: "/api/watchlists",
      data: { item }
    });
};

export const deleteWatchlistItem = (item) => {
    debugger
    return $.ajax({
      method: "DELETE",
      url: `/api/watchlists/${item}`,
      data: { item }
    });
};