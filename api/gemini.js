// Vercel API Route — /api/gemini
const { handler } = require("./gemini-service");

module.exports = async function geminiRoute(req, res) {
  // Build a Netlify-compatible event object from the Vercel request
  const event = {
    httpMethod: req.method,
    headers: req.headers,
    body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
    queryStringParameters: req.query || {},
    isBase64Encoded: false,
  };

  const result = await handler(event, {});

  // Forward response headers from the handler
  if (result.headers) {
    Object.entries(result.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
  }

  res.status(result.statusCode).send(result.body);
};

module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};
