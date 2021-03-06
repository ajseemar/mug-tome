json.extract! user, :id, :first_name, :last_name, :email
# if user.avatar.attached?
#     json.avatar url_for(user.avatar)
# else
#     if user.gender == "Male"
#         json.avatar image_url('dm.jpg')
#     else
#         json.avatar image_url('df.jpg')
#     end
# end

json.friendIds do 
    json.array! user.friends.map { |friend| friend.id }
end

json.likeIds do 
    json.array! user.likes.map { |like| like.id }
end

json.feedPostIds do 
    json.array! user.posts_to_timeline.order(created_at: :desc).map { |post| post.id }
end

json.newsFeedPostIds do
    json.array! user.posts_to_news_feed.order(created_at: :desc).map { |post| post.id }
end