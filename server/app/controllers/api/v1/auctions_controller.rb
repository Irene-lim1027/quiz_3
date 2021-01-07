class Api::V1::AuctionsController < Api::ApplicationController

    before_action :authenticate_user!,except:[:index,:show]
    before_action :find_auction, only:[:show, :destroy, :update]
    before_action :authorize!, only:[:update,:destroy]
    

        def index
            auctions = Auction.all.order(created_at: :desc)
            render(json: auctions, each_serializer:AuctionCollectionSerializer)
        end
    
        def show
            @auction = Auction.find(params[:id])
            render(json: @auction)
        end
    
        def create
            @auction = Auction.new(params.require(:auction).permit(:title,:description))
            @auction.user =current_user
            if @auction.save
                render json:{id:@auction.id}
            else
                render(
                    json:{errors:@auction.errors},
                    status:422
                )
            end
        end
    
        def destroy
            @auction.destroy
            render(json:{status:200}, status:200)
        end
    
        private

        def authorize!
            unless can? :crud, @auction
            render(json:{status:401}, status:401)
            end
        end
    
        def find_auction
            @auction ||= Auction.find params[:id]
        end
    

    
end
