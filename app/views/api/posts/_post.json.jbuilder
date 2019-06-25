json.extract! post, :id, :body, :user_id, :friend_id, :created_at #, :likes
# json.likes do post.likes end
json.likeIds do 
    json.array! post.likes.order(created_at: :desc).map { |like| like.id }
end