const routesHandler = (req,res) => {
  console.log('server is running...')
  // console.log('URL:', req.url, 'METHOD:', req.method, 'HEADERS:', req.headers)

  const url = req.url
  const body = '<html><head><title>Task01</title></head><body></body></html>'

  res.setHeader('Content-Type', 'text/html')

  res.write(body)

  if (url === '/') {
    res.write('<h1>Home</h1>')
    res.write('<p>Hello! This is home.</p>')
    res.write('<form action="/create-user" method="POST"><label for="add">Add a user: </label><input type="text" name="user"><button type="submit">Add</button></form>')
  }

  if (url === '/users') {
    res.write('<h1>Users</h1>')
    res.write('<ul><li>User 01</li></ul>')
  }

  res.end()
}

module.exports = routesHandler
