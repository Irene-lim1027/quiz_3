class AuctionsController < ApplicationController

    before_action :authenticate_user!, except:[:index, :show]
    before_action :find_auction, only:[:show]
    before_action :authorize_user!, only:[:edit,:update,:destroy]


    def index
        @auctions = Auction.all.order('created_at DESC')
    end

    def create
        @auction = Auction.new params.require(:auction).permit(:title, :description)
        if @auction.save
            redirect_to auctions_path, notice:"Auction created successfully"
        else
            render :new
        end
    end

    def show
        @bid = Bid.new
        @bids = @auction.bids.order(price: :DESC)
    end


    private
    
    def find_auction
        @auction =Auction.find params[:id]
    end

    def authorize_user!
        unless can? :crud, @auction
        redirect_to root_path, notice:"Access Denied"
    end
    
end
end

