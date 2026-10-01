import { blogPosts } from "./blog-data.js";
import { renderPosts, sortPosts } from "./blog-utils.js";

const blogContainer = document.querySelector("#blog-container");
const filterButtons = document.querySelectorAll(".blog-filter");

blogContainer.innerHTML = renderPosts(blogPosts);

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function(filterButton) {
            filterButton.classList.toggle(
                "active",
                filterButton === button
            );
        });

        let filteredPosts;

        if (selectedCategory === "all") {
            filteredPosts = blogPosts;
        } else {
            filteredPosts = blogPosts.filter(function(post) {
                return post.category === selectedCategory;
            });
        }
        const sortedPosts = sortPosts(filteredPosts);
        blogContainer.innerHTML = renderPosts(sortedPosts);
    });
});