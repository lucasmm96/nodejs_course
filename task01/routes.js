const routesHandler = (req,res) => {
  console.log('server is running...')
  // console.log('URL:', req.url, 'METHOD:', req.method, 'HEADERS:', req.headers)
  
  res.setHeader('Content-Type', 'text/html')
  res.write('<h1>this is a test<h1/>')
  res.end()
}

module.exports = routesHandler
