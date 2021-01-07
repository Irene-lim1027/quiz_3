class BidsController < ApplicationController

    before_action :authenticate_user!, except:[:index, :show]

    def create
        @auction = Auction.find params[:auction_id]
        @bid = Bid.new params.require(:bid).permit(:price)
        @bid.auction = @auction
        @bid.user = current_user

        if @bid.save
            redirect_to auction_path(@auction)
        else
            render auction_path
        end
    end
end
