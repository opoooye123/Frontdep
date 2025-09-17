import axios from "axios";
const baseURL = 'https://backend-fqzt.onrender.com/api/notes'

const getAll = () => {
    const request = axios.get(baseURL)
    const nonExisting = {
        id: 10000,
        content: 'This is not saved to server',
        important: true,
    }
    return request.then(res => res.data.concat(nonExisting))

}

const create = newObject => {
    const request = axios.post(baseURL, newObject)
    return request.then(res => res.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(res => res.data)
}

export default { getAll, create, update }