class Api::TransactionsController < ApplicationController

    def create
       @transaction = Transaction.new(transaction_params)
       @transaction.user_id = current_user.id
       debugger
       ticker = Ticker.find_by(symbol: params[:transaction][:ticker_symbol])
        @transaction.ticker_id = ticker.id
       if @transaction.save!
        render json: "api/transactions/show" # create jbuilder
       else
        render json:["Not enough buying power."]
       end
    end

    def index
        if current_user
            @transactions = Transaction.all
            render json: @transactions
        else
            render json: @transactions.errors.full_messages
        end
    end

    def show
        @transaction = Transaction.find(params[:ticker_id])
        render json: @transaction
    end

    private
    def transaction_params
        params.require(:transaction).permit(:ticker_symbol, :purchase_price, :purchase_shares)
    end

end