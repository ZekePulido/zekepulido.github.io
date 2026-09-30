import { blogPosts,} from "./blog-data.js";
import { createBlogCard, sortPosts } from "./blog-utils.js";

const blogContainer = document.querySelector("#blog-container");

const sortedPosts = sortPosts(blogPosts);

sortedPosts.forEach(function(post) {
    blogContainer.innerHTML += createBlogCard(post);
});