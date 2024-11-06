function togglePlay(audioId, button) {
    // Get the audio element by its ID
    const audio = document.getElementById(audioId);
    
    // Pause any other playing audio elements
    document.querySelectorAll('audio').forEach((aud) => {
        if (aud !== audio) {
            aud.pause();
            aud.currentTime = 0; // Optional: reset to start
        }
    });
    
    // Toggle play/pause for the clicked audio element
    if (audio.paused) {
        audio.play();
        button.classList.add('playing');
        button.querySelector('i').classList.replace('fa-play', 'fa-pause');
    } else {
        audio.pause();
        button.classList.remove('playing');
        button.querySelector('i').classList.replace('fa-pause', 'fa-play');
    }
}
function navigatePrevious() {
    // Add logic to go to the previous section or item
    console.log("Previous button clicked");
}

function navigateNext() {
    // Add logic to go to the next section or item
    console.log("Next button clicked");
}
 

  // Function to handle the star rating and update the UI
  function setRating(rating) {
    const stars = document.querySelectorAll('.rating-icons i'); // Select all star icons
    const ratingText = document.getElementById('rating-text'); // Element to update rating text

    // Loop through all the stars and add/remove the 'active' class based on the rating
    stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add('active'); // Add 'active' to fill the star
      } else {
        star.classList.remove('active'); // Remove 'active' to empty the star
      }
    });

    // Update the text below the stars with the rating selected
    ratingText.innerText = `You rated us ${rating} out of 5 stars!`;
  }

