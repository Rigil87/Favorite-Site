// Setting the launch time to February 26, 2025, at 16:17:00 and converting it to milliseconds
const launchTime = new Date("Feb 26, 2025 16:17:00").getTime(); // Example launch time
// declares variable that holds the referance to interval timer
let countdown;

// Handles the countdown logic and updates the display
function startCountdown() {
// Setting the interval to update the countdown every second (1000 milliseconds)
    countdown = setInterval(function() {

        // Getting the current time in milliseconds
        const now = new Date().getTime();
        // Calculating the difference between the launch time and the current time
        const distance = launchTime - now;
        // Rounders down to the nearest whole number with Math.floor 
        // Calculating the time left in days, hours, minutes, and seconds
        // distance / (1000 * 60 * 60 * 24) calculates the number of days left.
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) calculates the remaining hours after accounting for the full days.
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // (distance % (1000 * 60 * 60)) / (1000 * 60) calculates the remaining minutes after accounting for the full hours.
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // (distance % (1000 * 60)) / 1000 calculates the remaining seconds after accounting for the full minutes.
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Displaying the countdown in the element with the ID 'countdown'
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // If the countdown has reached zero, clear the interval and display "Liftoff!"
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = "Liftoff!";
        }
    }, 1000);
}

// Starting the countdown when the window loads
window.onload = startCountdown;
