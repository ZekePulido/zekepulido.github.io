export function createBlogCard(post) {
    return `
        <article class="blog-card">
            <span class="meta-tag">${post.category}</span>
            <h3>${post.title}</h3>
            <p class="blog-date">${formatDate(post.date)}</p>
            <p>${post.description}</p>
            <a href="${post.link}">Read more →</a>
        </article>
    `;
}

export function sortPosts(posts) {
    return [...posts].sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    });
}

export function formatDate(date) {
    const formattedDate = new Date(date);

    return formattedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}