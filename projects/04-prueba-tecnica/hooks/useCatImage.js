import { useState, useEffect } from 'react'
const PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

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

  return { imageUrl: `${PREFIX_IMAGE_URL}${imageUrl}` }
}
