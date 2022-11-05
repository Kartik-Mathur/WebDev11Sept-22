const movies = [
    { "name": "Bahubali", "year": 2013, "Genre": "Action", "industry": "Tollywood" },
    { "name": "Gangs of wasseypur", "year": 2012, "Genre": "Action", "industry": "Bollywood" },
    { "name": "Inception", "year": 2010, "Genre": "Thriller", "industry": "Hollywood" },
    { "name": "Kela Scene", "year": 2015, "Genre": "Action", "industry": "Tollywood" },
    { "name": "Bagh ban", "year": 2003, "Genre": "Drama", "industry": "Bollywood" }
];

const ActionMovies = movies.filter((movie,indx,arr)=>{
    if(movie.Genre == 'Action') return true;
    return false;
})

console.log(ActionMovies);