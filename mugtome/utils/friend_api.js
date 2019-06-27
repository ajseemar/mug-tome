export const fetchFriendRequests = () => (
    $.ajax({
        method: 'get',
        url: `/api/friend_requests`
    })
);

export const createFriendRequest = friend_req => (
    $.ajax({
        method: 'post',
        url: '/api/friend_requests',
        data: friend_req
    })
);

export const acceptFriendRequest = (req_id) => (
    $.ajax({
        method: 'patch',
        url: `/api/friend_requests/${req_id}`
    })
);

export const deleteFriendRequest = (req_id) => (
    $.ajax({
        method: 'delete',
        url: `/api/friend_requests/${req_id}`
    })
);

export const requestFriends = user_id => (
    $.ajax({
        method: 'get',
        url: `/api/users/${user_id}/friends`
    })
);

export const removeFriend = id => (
    $.ajax({
        method: 'delete',
        url: `/api/friends/${id}`
    })
)