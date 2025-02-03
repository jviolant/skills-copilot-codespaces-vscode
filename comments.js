// Create web server
// 1. Create a new file called comments.js
// 2. Include the following code in comments.js
// 3. Run the server
// 4. Open the browser and navigate to http://localhost:3000
// 5. You should see the message "Hello, Comments!"

const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hello, Comments!')
})

server.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})