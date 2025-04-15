const ratingDivs = document.querySelectorAll('div.ratingRow');

for (ratings of ratingDivs) { 
    ratings.remove();  
}

const albumBox = document.querySelectorAll('div.albumCriticScoreBox');
albumBox.remove(); 

for (boxs of albumBox) { 
    boxs.remove();  
}

