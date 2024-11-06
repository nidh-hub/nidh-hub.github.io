// Sidebar toggle functions with animation
function openNav() {
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("mainContent");

    sidebar.style.width = "250px";
    mainContent.style.marginLeft = "250px";

    // Animate sidebar opening with a slide-in effect
    sidebar.classList.add("slide-in");
}

function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("mainContent");

    sidebar.style.width = "0";
    mainContent.style.marginLeft = "0";

    // Animate sidebar closing with a slide-out effect
    sidebar.classList.remove("slide-in");
}

// Scroll indicator update function
window.onscroll = function() { updateScrollIndicator() };

function updateScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const scrollIndicator = document.getElementById("scrollIndicator");
    scrollIndicator.style.width = scrolled + "%";

    // Add an animation effect to the scroll indicator for smooth transition
    scrollIndicator.classList.add("scrolling");
    setTimeout(() => scrollIndicator.classList.remove("scrolling"), 300); // Reset after the animation ends
}

// Hover animation for skill items (bounce effect)
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.classList.add('bounce');
    });
    skill.addEventListener('mouseleave', () => {
        skill.classList.remove('bounce');
    });
});

// Fun animation for title when it becomes visible (fadeInFromBottom)
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseover', () => {
        title.classList.add('fadeInFromBottom');
    });
    title.addEventListener('mouseleave', () => {
        title.classList.remove('fadeInFromBottom');
    });
});
