<script>
async function runAI() {
  const prompt = document.getElementById("prompt").value || "A cinematic sunrise over a futuristic city";

  const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";

  const HF_TOKEN = "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"; // apna token lagao

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: prompt,
        options: { wait_for_model: true }
      })
    });

    if (!response.ok) {
      throw new Error(`❌ API Error: ${response.status} ${response.statusText}`);
    }

    const result = await response.blob();
    const imgUrl = URL.createObjectURL(result);
    document.getElementById("output").src = imgUrl;
  } catch (err) {
    console.error(err);
    alert("⚠️ Image generate karne me problem aayi!");
  }
}
</script>
