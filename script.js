// JavaScript to show/hide the dropdown

const logoButton = document.querySelector('.breadcrumb_logo');
const dropdownTrigger = logoButton.querySelector('.dropdown-trigger');
const dropdownContent = logoButton.querySelector('.dropdown-content');
const dropdownContainer = logoButton.querySelector('.dropdown'); // Select the whole container

logoButton.addEventListener('click', (event) => {
    event.stopPropagation();
    
    dropdownContent.classList.toggle('show-dropdown');
    dropdownContainer.classList.toggle('show-dropdown'); // Toggle the class for the container
});

// Close the dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!logoButton.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show-dropdown');
        dropdownContainer.classList.remove('show-dropdown'); // Remove the class for the container
    }
});
