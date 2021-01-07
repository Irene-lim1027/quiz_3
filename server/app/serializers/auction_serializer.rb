class AuctionSerializer < ActiveModel::Serializer

belongs_to :user
has_many :bids


  attributes(
    :id,
    :title,
    :description,
    :end_date,
    :reserve_price
  )
  
end
