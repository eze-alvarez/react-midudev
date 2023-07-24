function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt='Poster of the Movie' />
          </li>
        ))
      }
    </ul>
  )
}

function NoList () {
  return (<h3>No Movies Found</h3>)
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    <>
      {
        hasMovies
          ? <ListOfMovies movies={movies} />
          : <NoList />
     }
    </>
  )
}
