import { useState, useEffect, useRef } from 'react'

export function useForm () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('no se ingreso ningun texto')
      return
    }
    if (search.length < 3) {
      setError('el tamaño minimo del busqueda es de 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return {
    updateSearch,
    search,
    error
  }
}
