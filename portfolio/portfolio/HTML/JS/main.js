
/// cookies

function hideCookieNotification() {
document.getElementById('cookieNotification').style.display = 'none';
    console.log('Cookie notification dismissed');
  }


  /// darkmode
function darkMode() {
  document.body.classList.toggle("dark-mode");
  }




/// greeting 

let setGreeting = () => {
    let hours = new Date().getHours(); // Get current hour
    let greeting;
  
    if (hours >= 6 && hours < 12) {
      greeting = 'Goedemorgen';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Goedemiddag';
    } else if (hours >= 18 && hours < 24) {
      greeting = 'Goedenavond';
    } else {
      greeting = 'Goedenacht';
    }
    
    document.getElementById('greeting').innerHTML = greeting; // Display greeting in header
    console.log(`Greeting displayed: ${greeting}`); // Log the greeting
  };
  
  setGreeting();


/// countdown

let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1); // Adds 1 day (24 hours) to current time

let updateCountdown = () => {
    let now = new Date();
    let difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').innerHTML = 'The time has arrived!';
        clearInterval(countdownInterval); // Stop the countdown
        return;
    }

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

let countdownInterval = setInterval(updateCountdown, 1000); // Update every second
updateCountdown(); // Initial call


///menubutten
const menuButton = document.getElementById('menuButton'); // Menu toggle button
const menu = document.getElementById('menu');             // Menu list

// Update layout based on screen size
function updateMenuVisibility() {
    const isSmallScreen = window.innerWidth <= 800; // Set a threshold width (e.g., 800px for responsiveness)
    menuButton.style.display = isSmallScreen ? 'block' : 'none';  // Show button on small screens
    menu.style.display = isSmallScreen ? 'none' : 'block';        // Hide menu on small screens
}

// Initial visibility check and responsive resizing
updateMenuVisibility();
window.addEventListener('resize', updateMenuVisibility);

// Toggle menu visibility when clicking the button
menuButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
});