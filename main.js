
async function getMovies() {
    let url = "https://raw.githubusercontent.com/sebdvsweb/template-mini-films-vide/master/films.json"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}

const data = getMovies().then(function (movies) {
console.log(movies);
    movies.forEach(movie => {

        let divMovieContent = document.querySelector(".list-movies")
        let divCardContent = document.createElement("div")
        divCardContent.className = "card-content col-2"
        const img = document.createElement("img")
        const divMovieTitle = document.createElement("div")
        const divMovieYear = document.createElement("h5")
        divMovieTitle.className = "title"
        divMovieYear.className = "annee"

        img.setAttribute("src", movie.Poster)
        divMovieTitle.textContent = movie.Title
        divMovieYear.textContent = movie.Year

        divMovieContent.appendChild(divCardContent)
        divCardContent.appendChild(img)
        divCardContent.appendChild(divMovieTitle)
        divCardContent.appendChild(divMovieYear)
    });
})

document.querySelector("button").addEventListener("click", function () {
    const searchValue = document.querySelector("input").value
    
    document.querySelector("#moviesList").innerHTML = ""
    generateMoviesList(searchValue)
  })


/*

    <script>
      
      async function getMovies() {
  const url = "https://www.omdbapi.com/?s=star%20wars&plot=short&apikey=2a4831ba"
  const response = await fetch(url)
  const data = await response.json()
  return data.Search
}

const data = getMovies().then(function (movies) {
  console.log(movies)
  
  movies.forEach(function (movie) {

    let divMovieContent = document.querySelector(".list-movies")
    const card = document.createElement("div")
    card.classList.add("card")
    
    const img = document.createElement("img")
    img.setAttribute("src", movie.Poster)
    img.classList.add("card-img-top")
    card.appendChild(img)
    
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)
    
    const cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.textContent = movie.Title
    cardBody.appendChild(cardTitle)
    
    const cardText = document.createElement("p")
    cardText.classList.add("card-text")
    cardText.textContent = movie.Year
    cardBody.appendChild(cardText)
    
    divMovieContent.appendChild(card)


    /*document.body.appendChild(card)
})
})*/
  


