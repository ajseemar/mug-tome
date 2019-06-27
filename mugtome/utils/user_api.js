export const requestUsers = () => (
    $.ajax({
        method: 'get',
        url: `api/users`
    })
);

export const requestUser = id => (
    $.ajax({
        method: 'get',
        url: `api/users/${id}`
    })
);