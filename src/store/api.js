import axios from 'axios'

const defaults = {
  baseURL: 'http://localhost:8080/',
  transformResponse: [(data) => {
    return JSON.parse(replaceImageUrl(data))
  }]
}

Object.assign(axios.defaults, defaults)
export default {
	projectList ()  {
	  return axios.get('http://localhost:8080/selenium_tools/project/list').then(function (response) {
		    return response;
		  })
	}
}
// export const projectList = () => {
//   return axios.get('/project/list')
// }

// export const saveProject = (data) => {
//   return axios.post('/project/save',data)
// }

// export const modulList = (id) => {
//   return axios.get(`/4/news/${id}`)
// }

function replaceImageUrl (str) {
  let reg = /https?:(\\?\/){2}(pic\d*\.zhimg\.com\\?\/)/g
  return str.replace(reg, 'https://images.weserv.nl/?url=$2')
}
