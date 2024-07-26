let search='';
let page=1;
let totalPageNumber=1;
let pageNumber = 1;
const API_KEY = '6619a7edaa7836e07e237f782357370d';

const FETCH_URL_TOPRATED='';




const movieAPICall= async()=>{
    // try{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjE5YTdlZGFhNzgzNmUwN2UyMzdmNzgyMzU3MzcwZCIsIm5iZiI6MTcyMTk2NTE4MS43NzAzNDQsInN1YiI6IjY2YTJmOGIzMGY4MTA2ZGQwMGNhOGNlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4Q2MxSoy_p09sLihUW4_ryv3KwIkAwCvXUntuUgd5y8'
        }
      };
              console.log(page);
              console.log(typeof(page));
              console.log( `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
          const FETCH_URL_POPULAR = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
          const response= await fetch(FETCH_URL_POPULAR, options)
          let movieData= await response.json();
          // totalPageNumber= movieData.total_pages;
          console.log(movieData);
          if(movieData.results){
            displayMovies(movieData.results);
          }else{
            const movieDisplay = document.getElementById('movie-grid');
            movieDisplay.innerHTML = 'Error fetching data';
          }
    // }catch(error){
    //     console.log("Error Fetching Data");
    // }
      
}

const displayMovies=(movies)=>{
    const movieDisplay = document.getElementById('movie-grid');
    movieDisplay.innerHTML = '';

    const paginationDiv= document.getElementById('pagination');
    paginationDiv.innerHTML="";

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-item');
        movieDiv.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.original_title}</h3>
            <p>Rating: ${movie.vote_average}</p>
            <p>Release Date: ${movie.release_date}</p>
        `;
        movieDisplay.appendChild(movieDiv);
    });

      const button1 = document.createElement("button");
      button1.className="previous_btn";
      button1.innerText="Previous";
      button1.addEventListener("click", ()=>handlePageClick(page-1));
      paginationDiv.appendChild(button1);


      const button2 = document.createElement("button");
      button2.innerText=`${page}`;
      button2.className="current_page";
      paginationDiv.appendChild(button2);

      const button3 = document.createElement("button");
      button3.innerText="Next";
      button3.className="next_btn";
      button3.addEventListener("click", ()=>handlePageClick(page+1));
      paginationDiv.appendChild(button3);
}

const handlePageClick=(pg)=>{
  page= pg;
  movieAPICall();

}

movieAPICall();