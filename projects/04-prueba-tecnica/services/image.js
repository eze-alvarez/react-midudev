export const getImage = (words) => {
  return fetch(`https://cataas.com/cat/says/${words}?json=true`)
    .then((response) => response.json())
    .then(data => {
      const { url } = data
      // console.log('dataImage', url)
      return url
    })
}
