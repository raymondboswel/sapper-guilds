import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res) {
  try {
    const { email, password } = req.body;

    const result = await fetch(`http://localhost:4100/api/users/log_in`, {
      method: "POST",
      headers,
      body: JSON.stringify({ user: { email, password } }),
    });

    const parsed = await result.json();

    if (typeof parsed.error !== "undefined") {
      throw new Error(parsed.error);
    }

    req.session.token = parsed.data.token;
    res.end(JSON.stringify({ token: parsed.data.token }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
