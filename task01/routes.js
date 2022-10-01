const routesHandler = (req,res) => {
  console.log('server is running...')
  // console.log('URL:', req.url, 'METHOD:', req.method, 'HEADERS:', req.headers)

  const url = req.url
  const html1 = '<html><head><title>Task01</title></head><body>'
  const html2 = '</body></html>'
  
  res.setHeader('Content-Type', 'text/html')

  if (url === '/') {
    res.write(`${html1}<h1>Home</h1><p>Hello! This is home.</p>${html2}`)
  }

  if (url === '/users') {
    res.write(`${html1}<h1>Users</h1><ul><li>User 01</li></ul>${html2}`)
  }

  res.end()
}

module.exports = routesHandler
