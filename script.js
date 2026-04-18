function showSection(sectionId) {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(sectionId).style.display = "block";
}

// Show HOME first
window.onload = function() {
    showSection("home");
};