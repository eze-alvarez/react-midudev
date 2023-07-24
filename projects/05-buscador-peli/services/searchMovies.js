// const URL = ''

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=8915162d&s=${search}`)
    const json = await response.json()

    const movies = json.Search
    // console.log(movies.json())
    return movies?.map(movie => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      type: movie.type,
      poster: movie.Poster
    }))
  } catch (e) {
    console.log(e)
    throw new Error('Error searching movies')
  }
}
