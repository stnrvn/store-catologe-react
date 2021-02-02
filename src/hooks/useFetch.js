import { useState, useEffect } from 'react'

function useFetch (url) {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let newData = [...data]
        setData(newData)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return {
    data,
    setData,
    loading,
    error
  }
}

export default useFetch
