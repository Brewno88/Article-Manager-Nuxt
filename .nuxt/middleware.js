const middleware = {}

middleware['articles'] = require('../middleware/articles.js')
middleware['articles'] = middleware['articles'].default || middleware['articles']

export default middleware
