class Api::TickersController < ApplicationController 

    def index
        @tickers = Ticker.all
        render :index
    end

    def show
        @ticker = Ticker.find_by(symbol: params[:id].upcase)
        render json: @ticker
    end

    private
    def ticker_params
        params.require(:ticker).permit(:symbol)
    end

end