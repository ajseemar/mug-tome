export const requestUsers = () => (
    $.ajax({
        method: 'get',
        url: `api/users`
    })
);