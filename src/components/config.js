exports.API_URL = process.env.NODE_ENV === 'production'
  ? 'https://upload-serv.herokuapp.com/'
  : 'http://localhost:8080'