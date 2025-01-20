// Smooth Scrolling Functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Booking Form Submission Handler
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-form');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload on submit

        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const date = document.getElementById('date').value;

        if (!from || !to || !date) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        alert(`Flight search submitted!\nFrom: ${from}\nTo: ${to}\nDate: ${date}`);

        // Optionally, you can implement AJAX here to send the data to a server
    });
});

// Dynamic Hero Button Text Animation
let heroButtonTextIndex = 0;
const heroButtonTexts = ["Book Now", "Plan Your Trip", "Explore Destinations"];
const heroButton = document.querySelector('.hero button');

if (heroButton) {
    setInterval(() => {
        heroButtonTextIndex = (heroButtonTextIndex + 1) % heroButtonTexts.length;
        heroButton.textContent = heroButtonTexts[heroButtonTextIndex];
    }, 3000); // Change text every 3 seconds
}
