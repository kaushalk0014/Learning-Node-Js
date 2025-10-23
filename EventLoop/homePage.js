const { calculateSum } = require("./calculateSum");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator Page</title></head>");
    res.write(`<body><h1>Welcome to the Calculator Home Page</h1>
        <nav>
          <ul>
            <li><a href="/calculate">Calculate</a></li>
          </ul>
        </nav>
      </body>`);
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculate" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator Page</title></head>");
    res.write(`<body>
        <h1>Calculator</h1>
        <form action="/calculate-result" method="POST">
          <input type="text" name="num1" placeholder="First Number" required>
          <input type="text" name="num2" placeholder="Second Number" required>
          <button type="submit">Calculate Sum</button>    
        </form>
      </body>`);
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return calculateSum(req, res);
  }
};

module.exports = requestHandler;
