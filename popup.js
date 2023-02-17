
const button = document.getElementById("get-movie");
const movieTitle = document.getElementById("movie-title");
const moviePoster = document.getElementById("movie-poster");
const movieLink = document.getElementById("movie-link");
const movieTrailer = document.getElementById("movie-trailer");
const movieTrailerPic = document.getElementById("movie-trailer-pic");
let id = "";



//----------------------\\
// View Movie Trailer   \\
//----------------------\\
const handleClick = async (e) => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=68ae1fbefabd5142dbc34b40c318d4eb&language=en-US`);
    const data = await res.json();


    let trailerelm = '';
    for (let i = 0; i < data.results.length; i++) {
      console.log(data.results[i].type);
      if (data.results[i].type == "Trailer") {
        console.log('yes');
        trailerelm = data.results[i].key;
        break;
      } else {
        console.log('no')
      }
    }

    trailer = trailerelm;

  } catch (err) {
    console.error(err);
  }
  movieTrailer.href = `https://www.youtube.com/watch?v=${trailer}`;
  // movieTrailerPic.src = `https://img.youtube.com/vi/${trailer}/0.jpg`
};

//----------------------\\
// Random Movie Button  \\
//----------------------\\

button.addEventListener("click", async () => {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=68ae1fbefabd5142dbc34b40c318d4eb");
  const data = await response.json();
  const movies = data.results;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];

  movieTitle.innerText = movie.title;
  moviePoster.src = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
  moviePoster.alt = movie.title + `poster`;
  movieLink.href = `https://tmdb.org/movie/${movie.id}`;
  id = movie.id

  handleClick();

});

//----------------------\\
// Random Movie on Load \\
//----------------------\\

window.onload = function () { loader() };

const loader = async () => {
  const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=68ae1fbefabd5142dbc34b40c318d4eb");
  const data = await response.json();
  const movies = data.results;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const movie = movies[randomIndex];

  movieTitle.innerText = movie.title;
  moviePoster.src = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
  moviePoster.alt = movie.title + `poster`;
  movieLink.href = `https://tmdb.org/movie/${movie.id}`;
  id = movie.id

  handleClick();

};
