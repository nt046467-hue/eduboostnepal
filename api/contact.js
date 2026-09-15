// Vercel API Route — /api/contact
// Adapter: translates Vercel (req, res) → Netlify event shape → original handler
const { handler } = require("../netlify/functions/contact");

module.exports = async function contactRoute(req, res) {
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
      sizeLimit: "1mb",
    },
  },
};
