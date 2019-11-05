class Api::TickersController < ApplicationController 

    def create
        @ticker = Ticker.new(ticker_params)
        @ticker.save
    end

    def index
        @tickers = Ticker.all
        render :index
    end

    def show
        @ticker = Ticker.find_by(symbol: params[:id].upcase)
        if @ticker === nil 
            @ticker = Ticker.create!(symbol: params[:id].upcase, num_shares: 0) #ADD CREATE IN TICKER
        end
        render json: @ticker
    end

    private
    def ticker_params
        params.require(:ticker).permit(:symbol, :num_shares)
    end

end