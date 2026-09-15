// Vercel API Route — /api/gemini
// Adapter: translates Vercel (req, res) → Netlify event shape → calls original handler
const { handler } = require("../netlify/functions/gemini");

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
