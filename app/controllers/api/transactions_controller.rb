class TransactionsController < ApplicationController

    def create
       @transaction = Transaction.new(transaction_params)
       @transaction.user_id = @current_user.id
       debugger
       if @transaction.save
        render "api/users/show"
       else
        render json: @transaction.errors.full_messages
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
        debugger
        params.require(:transaction).permit(:ticker_id, :purchase_price, :purchase_shares)
    end

end