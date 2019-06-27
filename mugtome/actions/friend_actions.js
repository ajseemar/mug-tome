export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

const fetchFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
});

const deleteFriend = friend => ({
    type: REMOVE_FRIEND,
    friend_id: friend.id
});

export const requestFriends = (user_id) => dispatch => (
    FriendAPI.requestFriends(user_id)
        .then((friends) => dispatch(fetchFriends(friends)))
);

export const removeFriend = (id) => dispatch => (
    FriendAPI.removeFriend(id)
        .then((friend) => dispatch(deleteFriend(friend)))
);