const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
    return await fetch(
        `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
    ).then((response) => response.json())
    
}

export default {
    getHomeMovies: async () => {
        return [
            {
                slug: "top-rated",
                title: "Mieux notés",
                items: await fetchMovies("movie/top_rated"),
            },
            {
                slug: "upcoming",
                title: "Prochaines sorties ",
                items: await fetchMovies("movie/upcoming"),
            },
            {
                slug: "action",
                title: "Action",
                items: await fetchMovies("discover/movie?with_genres=28"),
            }
        ]
    }
}