json.extract! post, :id, :body, :user_id, :friend_id, :created_at #, :likes
# json.likes do post.likes end
# json.likeIds do 
#     json.array! post.likes.order(created_at: :desc).map { |like| like.id }
# end

# json.commentIds do 
#     json.array! post.comments.order(created_at: :desc).map { |comment| comment.id }
# end

json.set! :likes do 
    post.likes.order(created_at: :desc).map { |like| json.set! like.id do json.extract! like, :user_id, :likeable_type, :likeable_id end }
end

json.set! :comments do 
    post.comments.order(created_at: :desc).map { |comment| json.set! comment.id do json.extract! comment, :commentable_type, :commentable_id, :body, :user_id end }
end