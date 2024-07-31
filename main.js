function toggleNavbar() {
  var navbarLinks = document.getElementById("navbarLinks");
  if (navbarLinks.style.display === "flex") {
    navbarLinks.style.display = "none";
  } else {
    navbarLinks.style.display = "flex";
  }
}


























document.addEventListener('DOMContentLoaded', function() {
const genreSelect = document.getElementById('genre-select');
const moviesContainer = document.querySelector('.movies-container');
const movies = document.querySelectorAll('.movie');

genreSelect.addEventListener('change', function() {
  const selectedGenre = genreSelect.value;

  movies.forEach(movie => {
    if (selectedGenre === 'all' || movie.classList.contains(selectedGenre)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
});
});





document.addEventListener('DOMContentLoaded', function() {
const genreSelect = document.getElementById('genre-select');
const movies = document.querySelectorAll('.movie');
const totalMoviesSpan = document.getElementById('total-movies');

// Initial count
let totalMovies = movies.length;
totalMoviesSpan.textContent = totalMovies;

// Function to update displayed movies based on selected genre
function updateDisplayedMovies(genre) {
  movies.forEach(movie => {
    if (genre === 'all' || movie.classList.contains(genre)) {
      movie.style.display = 'block';
    } else {
      movie.style.display = 'none';
    }
  });
}

// Event listener for genre select change
genreSelect.addEventListener('change', function() {
  const selectedGenre = genreSelect.value;
  updateDisplayedMovies(selectedGenre);
});
});



const data = [
  { name: 'Avengers Endgame', url: 'avengers-endgame_details' },
  { name: 'Young Sheldon', url: 'young-sheldon.html' },
  { name: 'Oppenheimer', url: 'oppenheimer.html' },
  { name: 'Leap Year', url: 'young-sheldon.html' },
  { name: 'Napoleon', url: 'Napoleon.html' },
  { name: 'Pawn Sacrifice', url: 'pawn-sacrifice.html' },
  { name: 'The Queens Gambit', url: 'queens-gambit.html' },
  { name: 'The Shawshank Redemption', url: 'the-shawshank-red.html' },
  { name: 'Harry Potter and the Half-Blood Prince', url: 'harrypotter-halfb.html' },
  { name: 'Harry Potter 20th Anniversary: Return to Hogwarts', url: 'harrypoter-doc.html' },
  { name: 'Harry Potter and the Order of the Phoenix', url: 'harrypoter-order.html' },
  { name: 'Harry Potter and the Deathly Hallows: Part 1', url: 'harrypotter-death1.html' },
  { name: 'Inside Out 2', url: 'insideout2.html' },
  { name: 'Harry Potter and the Deathly Hallows: Part 2', url: 'harrypotter-death2.html' },
  { name: 'Inside Out', url: 'insideout.html' },
  { name: 'Avatar: The Way of Water', url: 'avatar-way-water.html' },
  { name: 'Despicable Me ', url: 'despicable-me-1.html' },
  { name: 'Despicable Me 2 ', url: 'despicable-me-2.html' },
  { name: 'Despicable Me 3', url: 'despicable-me-3.html' },
  { name: 'Despicable Me 4', url: 'despicable-me-4.html' },
  { name: 'Sherlock', url: 'sherlock.html' },
  { name: 'Dark Matter', url: 'darkmatter.html' },
  { name: 'The GodFather', url: 'godfather.html' },
  { name: 'Presumed Innocent', url: 'Presumed-Innocent.html' },
  { name: 'The Lord of the Rings: The Fellowship of the Ring', url: 'lord-of-ring-fellowship.html' },
  { name: 'Kung Fu Panda', url: 'Kung-Fu-Panda.html' },
  { name: 'Kung Fu Panda 2', url: 'Kung-Fu-Panda-2.html' },
  { name: 'Kung Fu Panda 3', url: 'Kung-Fu-Panda-3.html' },
  { name: 'Kung Fu Panda 4', url: 'Kung-Fu-Panda-4.html' },
  { name: 'Soul', url: 'soul.html' },
  { name: 'Interstellar', url: 'Interstellar.html' },
  { name: 'John wick', url: 'johnwick.html' },
  { name: 'Venom', url: 'venom.html' },

  
  // Add more movies and series here
];

function showSuggestions(query) {
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = '';

  if (query.length < 3) {
      return;
  }

  const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  
  filteredData.forEach(item => {
      const suggestion = document.createElement('div');
      suggestion.textContent = item.name;
      suggestion.onclick = () => {
          window.location.href = item.url;
      };
      suggestionsContainer.appendChild(suggestion);
  });
}

function showSuggestionsFullscreen(query) {
  const suggestionsContainer = document.getElementById('fullscreen-suggestions');
  suggestionsContainer.innerHTML = '';

  if (query.length < 3) {
      return;
  }

  const filteredData = data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  
  filteredData.forEach(item => {
      const suggestion = document.createElement('div');
      suggestion.textContent = item.name;
      suggestion.onclick = () => {
          window.location.href = item.url;
      };
      suggestionsContainer.appendChild(suggestion);
  });
}

function openFullscreenSearch() {
  document.getElementById('fullscreen-search').style.display = 'flex';
  document.getElementById('fullscreen-search-input').focus();
}

function closeFullscreenSearch() {
  document.getElementById('fullscreen-search').style.display = 'none';
}








 