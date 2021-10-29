// this is an opinionated server-side framework for Node.js that helps you create and manage HTTP server REST endpoints.
const express = require('express')
// cookie-parser looks at the headers in between the client and the server transactions,
// reads these headers, parses out the cookies being sent, and saves them in a browser.
// In other words, cookie-parser will help us create and manage cookies depending on the request a user makes to the server.
const cookieParser = require('cookie-parser')

//setup express app
const app = express()

// use the cookie parser in our application
// This will make your application use the cookie parser and Express modules.
app.use(cookieParser());


// set a simple route to start the server
app.get('/', (req, res) => {
    res.send('welcome to a simple http cookie server');
})

// set a port number
app.listen(8000, () => console.log('The server is running port 8000...'));

