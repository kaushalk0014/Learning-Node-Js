const calculateSum = (req, res) => {
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parsedData = Buffer.concat(body).toString();

    const objectData = {};
    const params = new URLSearchParams(parsedData);
    for (const [key, value] of params) {
      //console.log(`${key}: ${value}`);
      objectData[key] = value;
    }
    let num1 = objectData.num1;
    let num2 = objectData.num2;
    let sum = parseFloat(num1) + parseFloat(num2);
    console.log(" Sum:", sum);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculation Result</title></head>");
    res.write(`<body>
            <h1>Calculation Result</h1>
            <p>The sum of ${num1} and ${num2} is: <strong>${sum}</strong></p>
            <a href="/calculate">Perform Another Calculation</a>
          </body>`);
    res.write("</html>");
    return res.end();
  });
};
exports.calculateSum = calculateSum;
