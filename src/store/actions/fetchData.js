const fetchData = (data) => {
    return {
        type: 'FETCH_DATA',
        payload: data
    }
}

export default fetchData