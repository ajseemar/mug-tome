export const requestComments = (params) => (
    $.ajax({
        method: 'get',
        url: `/api/${params.commentable_type}/${params.commentable_id}/comments`
    })
);

export const createComment = (params) => (
    $.ajax({
        method: 'post',
        url: `/api/${params.commentable_type}/${params.commentable_id}/comments`,
        data: { comment: params.comment }
    })
);

export const deleteComment = id => (
    $.ajax({
        method: 'delete',
        url: `/api/comments/${id}`
    })
)