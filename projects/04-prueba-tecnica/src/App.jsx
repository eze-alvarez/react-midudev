import './App.css'
import { useCatImage } from '../hooks/useCatImage'
import { useCatFact } from '../hooks/useCatFact'
// const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
// Componente principal del proyecto que renderiza el componente Gato y le pasa la prop
export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handlerClick = async () => refreshFact()
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handlerClick}>Click para recargar</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='catImage' />}
    </main>
  )
}
