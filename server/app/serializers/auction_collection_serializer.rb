class AuctionCollectionSerializer < ActiveModel::Serializer

  attributes(
    :id,
    :title,
    :description,
    :end_date,
    :reserve_price,
    :created_at,
    :updated_at)
  
end
