const URL = 'https://api.pexels.com/v1/search?'
const API = 'f5xleS0WRPgrJjNtuvIF9N5SVNVwARcT883eVGmvbIrGwzvfdxe8wKrq'

const get = async (search) => {
    const query = new URLSearchParams({
        query: search,
        per_page: 30
    })
    const response = await fetch(URL + query, {
        headers: {
            Authorization: API
        }
    })
    const data = response.json()
    return data
}

const nextPage = async (nextURL) => {
    const response = await fetch(nextURL, {
        headers: {
            Authorization: API
        }
    })
    const data = response.json()
    return data
}

const pexel = {
    get,
    nextPage
}

export default pexel;