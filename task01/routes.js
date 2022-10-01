const routesHandler = (req,res) => {
  console.log('server is running...')
  // console.log('URL:', req.url, 'METHOD:', req.method, 'HEADERS:', req.headers)

  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Task 01</title>')
    res.write('<body>')
    res.write('<h1>Home</h1>')
    res.write('<p>Hello! This is home.</p>')
    res.write('<form action="/create-user" method="POST">')
    res.write('<label for="add">Add a user: </label>')
    res.write('<input type="text" name="user">')
    res.write('<button type="submit">Add</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</head>')
    res.write('</html>')

    return res.end()
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>')
    res.write('<title>Task 01</title>')
    res.write('<body>')
    res.write('<h1>Users</h1>')
    res.write('<ul><li>User 01</li></ul>')
    res.write('</body>')
    res.write('</head>')
    res.write('</html>')

    return res.end()
  }

  if (url === '/create-user' && method === 'POST') {
    const body = []

    req.on('data', (chunk) => {
      body.push(chunk)
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      console.log('Parsed Body: ', parsedBody)
    })

    res.statusCode = 302
    res.setHeader('Location', '/')

    return res.end()
  }
}

module.exports = routesHandler
