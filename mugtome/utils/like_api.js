export const requestLikes = (params) => (
    $.ajax({
        method: 'get',
        url: `/api/${params.likeable_type}/${params.likeable_id}/likes`
    })
);

export const createLike = (params) => (
    $.ajax({
        method: 'post',
        url: `/api/${params.likeable_type}/${params.likeable_id}/likes`,
        data: { like: params.like }
    })
);

export const deleteLike = id => (
    $.ajax({
        method: 'delete',
        url: `/api/likes/${id}`
    })
)