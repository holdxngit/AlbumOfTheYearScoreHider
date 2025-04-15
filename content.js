console.log('content.js is running')
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM content loaded');

    // Example: targeting elements with the class 'review-score', adjust to match actual site
    const scoresBox = document.getElementsByClassName('albumTopBox');
    document.removeChild();

    // const reviewScores = document.querySelectorAll('centerContent');
    // reviewScores.forEach(score => score.style.display = 'none');  // Hide the elements
    chrome.runtime.sendMessage({ type: 'onSpecificSite', message: 'User is on the music site.' });
  });