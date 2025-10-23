const calculateSum = (req, res) => {
  const body = [];

  console.log("1 calculateSum called");

  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2 chunk called");
  });

  let result;
  req.on("end", () => {
    const parsedData = Buffer.concat(body).toString();
    const objectData = {};
    const params = new URLSearchParams(parsedData);
    for (const [key, value] of params) {
      objectData[key] = value;
    }

    let num1 = objectData.num1;
    let num2 = objectData.num2;
    let sum = parseFloat(num1) + parseFloat(num2);

    console.log("3 end called");
  });

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Calculation Result</title></head>");
  res.write(`<body>
            <h1>Calculation Result</h1>
            <p>Result: <strong>${result}</strong></p>
            <a href="/calculate">Perform Another Calculation</a>
          </body>`);
  res.write("</html>");

  console.log("4 end sum calculation");

  return res.end();
};
exports.calculateSum = calculateSum;

//---------------Output----------------
// Below output shows the order of execution, because of callbacks and event loop
//Once req.on("data",...) is called, it registers the callback and moves to next line
//Then call req.on("end",...) which also registers its callback and moves to next line
//Finally it reaches res.end() and sends response back to client
//Meanwhile, when data is received, "data" event callback is executed (2 chunk called)
//After all data is received, "end" event callback is executed (3 end called)


// 1 calculateSum called
// 4 end sum calculation
// 2 chunk called
// 3 end called