json.extract! comment, :id, :user_id, :body

json.likeIds do 
    json.array! comment.likes.map { |like| like.id }
end