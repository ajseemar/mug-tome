export const selectPosts = (posts, user) => {
    if (!user) return null;
    const { feedPostIds } = user
    const output = [];
    feedPostIds.map(id => {
        if (posts[id]) return output.push(posts[id]);
    });
    return output;
};