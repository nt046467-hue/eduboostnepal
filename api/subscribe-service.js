const https = require("https");

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzYenJ8ZL4Uf_Ii-VkkttlFebnQafhsMt1IZYQQcsqQCCmpw7Ia4gI8_aYWHdD4QWXgzQ/exec";

function httpsRequest(url, options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      // Follow redirects
      if (res.statusCode === 301 || res.statusCode === 302) {
        const redirectOptions = {
          method: options.method,
          headers: options.headers,
        };
        return httpsRequest(res.headers.location, redirectOptions, body)
          .then(resolve)
          .catch(reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

exports.handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  try {
    if (event.httpMethod === "GET") {
      const email = (event.queryStringParameters || {}).email || "";
      const raw = await httpsRequest(
        SHEET_URL + "?email=" + encodeURIComponent(email),
        { method: "GET", headers: { "User-Agent": "node" } }
      );
      return { statusCode: 200, headers, body: raw };
    }

    if (event.httpMethod === "POST") {
      const payload = Buffer.from(event.body || "");
      const raw = await httpsRequest(
        SHEET_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
            "Content-Length": payload.length,
            "User-Agent": "node",
          },
        },
        payload
      );
      return { statusCode: 200, headers, body: raw };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ status: "error", msg: "method not allowed" }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ status: "error", msg: err.toString() }),
    };
  }
};
