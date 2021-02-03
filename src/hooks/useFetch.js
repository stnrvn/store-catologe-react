import { useState, useEffect } from 'react'

function useFetch (url) {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)
  const [ errModal, setErrModal ] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
        setErrModal(true)
      })
  }, [url])

  return {
    data,
    setData,
    loading,
    error,
    errModal
  }
}

export default useFetch
