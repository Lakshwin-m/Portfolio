document.addEventListener('DOMContentLoaded', function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    // Add click event listeners to all links
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetSectionId = this.getAttribute('data-section');

            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none'; // Ensure sections are hidden
            });

            // Show the target section
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.style.display = 'block'; // Ensure the target section is visible
                targetSection.classList.add('active');
            } 
        });
    });

    // Show the home section by default
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }

    // Chart.js example
    const ctx = document.getElementById('skillsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Blender', 'Python','C','HTML', 'CSS', 'JavaScript'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 90, 50, 70, 70, 70],
                backgroundColor: 'rgba(4, 255, 219, 0.1)',
                borderColor: 'rgba(18, 131, 131, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
