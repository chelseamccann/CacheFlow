class Api::WatchlistController < ApplicationController

    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist.user_id = current_user.id
        if @ticker.save
            render "api/watchlist/show" 
            # render json: @watchlist #or render show?
        else
            render @watchlist.errors.full_messages
        end
    end

    # def show
    # end

    def index
        @watchlists = Watchlist.find_by(id: params[:id])
        render "api/watchlist/index" 
    end

    def destroy
        @watchlist = Watchlist.find_by(id: params[:id])
        @watchlist.destroy 
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:ticker_id)
    end

end