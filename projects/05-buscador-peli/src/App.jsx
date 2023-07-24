import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from '../hooks/useMovie'
import { useForm } from '../hooks/useForm'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useForm()
  const { movies, getMovies, loading } = useMovie({ search, sort })

  const debounceGetMovie = useCallback(debounce((search) => {
    getMovies({ search })
  }, 300)
  , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }
  const handleChange = (event) => {
    const newSearch = event.target.value
    if (newSearch.startsWith(' ')) return
    updateSearch(newSearch)
    debounceGetMovie(newSearch)
  }

  const handleSort = () => setSort(!sort)

  return (
    <div className='page'>
      <header>
        <h1>Buscador de pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} type='text' placeholder='Matrix, Rocky, Avengers ..'
          />
          <input type='checkbox' name='sort' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>estoy cargando</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
