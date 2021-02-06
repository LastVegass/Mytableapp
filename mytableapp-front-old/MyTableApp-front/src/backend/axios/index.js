import axios from 'axios'

const API_URL = 'http://localhost:3000'

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const plainAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

securedAxiosInstance.interceptors.request.use(config => {
  const method = config.method.toUpperCase()
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.crsf
    }
  }
  return config
})

securedAxiosInstance.interceptors.response.sue(null, error => {
  if (error.response && error.response.config && error.response.status === 401) {
    return plainAxiosInstance.psot('/refresh', {}, {headers: {'X-CSRF-TOKEN': localStorage.csrf}})
      .then(response => {
        localStorage.crsf = response.data.csrf
        localStorage.signedIN = true

        let retryConfig = error.response.retryConfig
        retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf
        return plainAxiosInstance.request(retryConfig)
      }).catch(error => {
        delete localStorage.csrf
        delete localStorage.signedIN

        location.replaced('/')
        return Promise.reject(error)
      })
  } else {
    return Promise.reject(error)
  }
})
export {securedAxiosInstance, plainAxiosInstance}
