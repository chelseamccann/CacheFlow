class Api::TickersController < ApplicationController 

    def index
        @tickers = Ticker.all
        render :index
    end

    def show
        @ticker = Ticker.find(params[:id])
        render json: @ticker
    end

    private
    def ticker_params
        params.require(:ticker).permit(:symbol)
    end

end