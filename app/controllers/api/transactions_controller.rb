class Api::TransactionsController < ApplicationController

    def create
        
        @transaction = Transaction.new(transaction_params)
        @transaction.user_id = current_user.id

        ticker = Ticker.find_by(symbol: params[:transaction][:ticker_symbol].upcase)

        # CHECK IF IN DB, IF NOT CREATE IT
        if ticker === nil 
            Ticker.create!(symbol: params[:transaction][:ticker_symbol].upcase, num_shares: 0) #ADD CREATE IN TICKER
        end
        debugger
        ticker_current_shares = ticker.num_shares
        
        @transaction.ticker_id = ticker.id
        
        @bp = current_user.buying_power 
        cost = @transaction.purchase_price * @transaction.purchase_shares

        if @transaction.buy === true && @bp >= cost && @transaction.save!
            new_shares = ticker_current_shares + @transaction.purchase_shares
            current_user.update_attribute(:buying_power, @bp - cost)
            ticker.update_attribute(:num_shares, new_shares)
            render "api/transactions/show" 

        elsif @transaction.buy === false && ticker_current_shares - @transaction.purchase_shares > 0 && @transaction.save!
            new_shares = ticker_current_shares - @transaction.purchase_shares
            current_user.update_attribute(:buying_power, @bp + cost)
            ticker.update_attribute(:num_shares, new_shares)
            render "api/transactions/show" 

        elsif @bp < cost      
            render json:["Not enough buying power."]

        elsif ticker_current_shares - @transaction.purchase_shares <= 0  
            render json:["You do not have that many shares."]
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
        params.require(:transaction).permit(:ticker_symbol, :purchase_price, :purchase_shares, :buy)
    end

end