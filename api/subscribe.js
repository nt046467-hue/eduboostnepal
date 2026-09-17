// Vercel API Route — /api/subscribe
const { handler } = require("./subscribe-service");

module.exports = async function subscribeRoute(req, res) {
  const event = {
    httpMethod: req.method,
    headers: req.headers,
    body: typeof req.body === "string" ? req.body : JSON.stringify(req.body),
    queryStringParameters: req.query || {},
    isBase64Encoded: false,
  };

  const result = await handler(event, {});

  if (result.headers) {
    Object.entries(result.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });
  }

  res.status(result.statusCode).send(result.body);
}

module.exports.config = {
  api: {
    bodyParser: {
      sizeLimit: "512kb",
    },
  },
};
