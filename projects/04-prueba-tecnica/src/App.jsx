import { useEffect, useState } from 'react'
import './App.css'

const FINAL_IMAGE = 'https://cataas.com'
const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'
// Componente principal del proyecto que renderiza el componente Gato y le pasa la prop
export function App () {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState()

  //   const RANDOM_IMAGE_ENDPOINT = `https://cataas.com/cat/says/${firstWord}?json=true`
  // console.log('afuera del effect')
  useEffect(() => {
    // console.log('monta effect')
    fetch(RANDOM_FACT_ENDPOINT)
      .then((response) => response.json())
      .then(data => {
        const { fact } = data
        // console.log('data', fact)
        setFact(fact)
      })
    return console.log('desmontado')
  }, [])

  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then((response) => response.json())
      .then(data => {
        const { url } = data
        // console.log('dataImage', url)
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      <div>{
            imageUrl
              ? <img src={`${FINAL_IMAGE}${imageUrl}`} alt='catImage' />
              : 'error'
        }
      </div>
    </main>
  )
}
