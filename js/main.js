import { blogPosts } from "./blog-data.js";
import { createBlogCard, sortPosts, formatDate } from "./blog-utils.js";

const projectsButton = document.querySelector("#projects-button");
const projectsSection = document.querySelector("#projects");
const navLinks = document.querySelectorAll('a[href^="#"]');
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const skillBadges = document.querySelectorAll(".skill-badge");
const skillDescription = document.querySelector(".skill-description");
const skillName = document.querySelector("#skill-name");
const skillText = document.querySelector("#skill-text");

const skillInfo = {
    cpp: {
        name: "C++",
        description: "Used for systems programming, problem solving, and application development."
    },

    python: {
        name: "Python",
        description: "Used for backend development, automation, testing, and data-focused projects."
    },

    java: {
        name: "Java",
        description: "Used for backend services, APIs, and application development."
    },

    scala: {
        name: "Scala",
        description: "Used for backend services and building scalable applications."
    }
};

function scrollToSection(section) {
    if (!section) return;
    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

if (projectsButton && projectsSection) {
    projectsButton.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToSection(projectsSection);
    });
}

navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        const targetId = link.getAttribute("href");
        const targetSection = targetId ? document.querySelector(targetId) : null;

        if (!targetSection) return;

        event.preventDefault();
        scrollToSection(targetSection);
    });
});

if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function(filterButton) {
                filterButton.classList.toggle("active", filterButton === button);
            });

            projectCards.forEach(function(card) {
                const technologies = card.dataset.technologies || "";
                const matches = selectedFilter === "all" || technologies.includes(selectedFilter);
                card.classList.toggle("hidden", !matches);
            });
        });
    });
}

skillBadges.forEach(function(badge) {
    badge.addEventListener("click", function() {
        const selectedSkill = badge.dataset.skill;

        skillBadges.forEach(function(skillBadge) {
            skillBadge.classList.remove("selected");
        });

        badge.classList.add("selected");
        skillDescription.classList.add("has-selection");

        const skill = skillInfo[selectedSkill];

        if (!skill) {
            return;
        }

        skillName.textContent = "▶ " + skill.name;
        skillText.textContent = skill.description;
            });

});

const sortedPosts = sortPosts(blogPosts);

const latestPosts = sortedPosts.slice(0, 3);

const blogContainer = document.querySelector("#blog-container");

latestPosts.forEach(function(post) {
    blogContainer.innerHTML += createBlogCard(post);
});
