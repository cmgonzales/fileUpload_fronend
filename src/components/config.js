exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://upload-serv.herokuapp.com/'
  : 'http://localhost:3000'