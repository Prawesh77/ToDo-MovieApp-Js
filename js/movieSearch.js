const handleSearchClick=async()=>{
    search = document.getElementById("search-input").value ;
    if(search){
        console.log(search);
    }
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
    console.log(SEARCH_URL);
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE5YTdlZGFhNzgzNmUwN2UyMzdmNzgyMzU3MzcwZCIsIm5iZiI6MTcyMTk1NzI2NC45MDQ2NTIsInN1YiI6IjY2YTJmOGIzMGY4MTA2ZGQwMGNhOGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PxA415oVBpNawBuzdX2SxcdNDGbMZkUH1VAsNSmiq68'
        }
      };
      
    const response = await fetch(SEARCH_URL, options);
    const searchedMovieList = await response.json();

    //to display detail
    //    const searchResult = searchedMovieList.results[0];
    //    console.log(searchResult);
    //    searchMovieDisplay(searchResult);

    //to display grid of searched movies
    searchMovieDisplay(searchedMovieList.results);



};

//function to display details of movie
const searchedMovieDetail=(movie)=>{
    const movieDetails = document.getElementById('one_movie_detail');
    movieDetails.style.display="block";
    // const searchDisplay = document.getElementById('movie-details');
    // searchDisplay.innerHTML = '';
    const backToExplore = document.getElementById('back_to_explore');
    backToExplore.innerHTML = '';

    if (movie) {
        movieDetails.innerHTML = `
            <p class="back_to_search" onclick="clearSearchedMovieDetail()"> Back to Search</p>
            <div class="detail_secDiv">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <div class="detail_detailsDiv">
                    <h2>${movie.title}</h2>
                    <p class="detail_overview">${movie.overview}</p>
                    <p><b>Rating:</b> ${movie.vote_average}</p>
                    <p><b>Release Date:</b> ${movie.release_date}</p>
                </div>  
            </div>      
        `;
    } else {
        movieDetails.innerHTML = `<p class="back_to_explore"> <a href="movie.html">Back to Explore</a></p>
                                    <p>Movie not found</p>`;
    }

}

const clearSearchedMovieDetail=()=>{
    // const movieDetails = document.getElementById('one_movie_detail');
    // movieDetails.innerHTML ="";
    const movieDetails = document.getElementById('one_movie_detail');
    movieDetails.style.display="none";
}

//function to display list of searched movie lists
const searchMovieDisplay=(movies)=>{
        const searchDisplay = document.getElementById('movie-details');
        searchDisplay.innerHTML = '';
        const backToExplore = document.getElementById('back_to_explore');
        backToExplore.innerHTML = '<p class="back_to_explore"> <a href="movie.html">Back to Explore</a></p>';
        
        movies.forEach((movie) => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie-grid-item');
            movieDiv.addEventListener("click",()=>searchedMovieDetail(movie));
            movieDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.original_title}</h3>
                <p>Rating: ${movie.vote_average}</p>
                <p>Release Date: ${movie.release_date}</p>
            `;
            searchDisplay.appendChild(movieDiv);
        });

    const movieDisplay = document.getElementById('movie-grid');
    movieDisplay.innerHTML = '';

    const paginationDiv= document.getElementById('pagination');
    paginationDiv.innerHTML="";
    
}

const searchBtn= document.getElementById("search-button");
searchBtn.addEventListener("click", handleSearchClick);
