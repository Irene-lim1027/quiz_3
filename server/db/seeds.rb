# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.destroy_all
Auction.destroy_all
User.destroy_all

PASSWORD = 'apples'

super_user =User.create(
    first_name: 'Jon',
    last_name: 'Snow',
    email:'js@gmail.com',
    password: PASSWORD,
    is_admin:true
    )

10.times do 
    first_name=Faker::Name.first_name
    last_name=Faker::Name.last_name
  
      User.create(
        first_name:first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password: PASSWORD
        )
  end
  
  users=User.all
  

    100.times do
        Auction.create(
            title: Faker::Restaurant.name,
            description: Faker::Lorem.paragraph,
            end_date:Faker::Date.forward(days: 30),
            reserve_price: Faker::Number.decimal(l_digits: 2),
            created_at: Faker::Date.backward(days:365),
            updated_at: Faker::Date.backward(days:365),
            user: users.sample
        )
    end

    auctions = Auction.all

    auctions.each do |a|
        3.times do
            Bid.create({
                price: Faker::Number.decimal(l_digits: 2),
                auction_id: a.id,
                created_at: Faker::Date.backward(days:365),
                updated_at: Faker::Date.backward(days:365),
                user: users.sample
            })
        end
    end

    bids = Bid.all


puts Cowsay.say("Generated #{auctions.count} auctions", :dragon)
puts Cowsay.say("Generated #{bids.count} bids", :sheep)
puts Cowsay.say("Generated #{users.count} users", :cow)

