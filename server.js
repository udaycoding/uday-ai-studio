import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const HF_TOKEN = process.env.HF_TOKEN; // Hugging Face Token को env var में रखेंगे

app.post("/generate", async (req, res) => {
  try {
    const prompt = req.body.prompt || "A futuristic city at sunset";

    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: prompt })
      }
    );

    if (!response.ok) {
      const err = await response.text();
      return res.status(response.status).send({ error: err });
    }

    const buffer = await response.arrayBuffer();
    res.set("Content-Type", "image/png");
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.listen(3000, () => console.log("✅ Proxy server running on port 3000"));
