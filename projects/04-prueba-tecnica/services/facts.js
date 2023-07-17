const RANDOM_FACT_ENDPOINT = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
  return fetch(RANDOM_FACT_ENDPOINT)
    .then((response) => response.json())
    .then(data => {
      const { fact } = data
      // console.log('data', fact)
      return (fact)
    })
}
