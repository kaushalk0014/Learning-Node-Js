const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request received");

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Node Js Example</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'> 
      </head>
      <body>
        <head>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/customer">Customer</a></li>
              </ul>
            </nav>
        </head>
      </body>
    </html>
  `);
    return res.end();
  } else if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'>
          <title>Node Js Example</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'> 
        </head>
        <body>
          <h1>Wolcome to home page</h1>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'>
          <title>Node Js Example</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'> 
        </head>
        <body>
          <h1>Wolcome to about page</h1>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'>
          <title>Node Js Example</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'> 
        </head>
        <body>
          <h1>Wolcome to contact page</h1>
        </body>
      </html>
    `);
    return res.end();
  } else if (req.url === "/customer") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <meta charset='utf-8'>
          <meta http-equiv='X-UA-Compatible' content='IE=edge'>
          <title>Node Js Example</title>
          <meta name='viewport' content='width=device-width, initial-scale=1'> 
        </head>
        <body>
          <h1>Wolcome to customer page</h1>
        </body>
      </html>
    `);
    return res.end();
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
