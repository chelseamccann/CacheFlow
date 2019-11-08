class Api::WatchlistsController < ApplicationController

    def create
        ticker = Ticker.find_by(symbol: params[:item][:symbol])
        if ticker === nil
            ticker = Ticker.create!(symbol: params[:item][:symbol], num_shares: 0)
        end
        @watchlist = Watchlist.new(user_id: current_user.id, ticker_id: ticker.id, symbol: ticker.symbol, num_shares: ticker.num_shares)

        if @watchlist.save!
            render "api/watchlists/show" 
        else
            render @watchlist.errors.full_messages
        end
    end

    def index
        @watchlists = Watchlist.all
        render :index
    end

    def show # not needed?
        @watchlist = Watchlist.find_by(symbol: params[:id].upcase)
        if @watchlist === nil 
            @watchlist = Watchlist.create!(symbol: params[:id].upcase, num_shares: 0) 
        end
        render json: @watchlist
    end

    def destroy
        watchlist = Watchlist.find_by(symbol: params[:item][:symbol])
        watchlist.destroy
        render json: watchlist
    end

end