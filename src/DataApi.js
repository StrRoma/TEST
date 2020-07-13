export default class DataApi {  
   static TEST = (callback) => {
        return fetch('/auth/google', {
            method: 'GET',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        }).then( response => {
                response.json().then((data) => {
                    callback(data)
                })
        })
    }
}