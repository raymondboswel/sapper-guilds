import fetch from "node-fetch";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export async function post(req, res) {
  try {
    const { name } = req.body;
    const { token } = req.session;
    console.log(req.session);
    const result = await fetch(`http://localhost:4100/api/guilds`, {
      method: "POST",
      headers: { ...headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({ guild: { name } }),
    });

    console.log(result);

    const parsed = await result.json();

    console.log(parsed);

    if (typeof parsed.error !== "undefined") {
      throw new Error(parsed.error);
    }

    res.end(JSON.stringify({ guild: parsed.data }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
