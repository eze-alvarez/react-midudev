import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'random fact' })

  return (
    imageUrl ? <img src={imageUrl} alt='catImage' /> : 'error'
  )
}
